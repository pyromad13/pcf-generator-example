import * as React from "react";
import { Component1 } from "./Components/Component1";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as ReactDOM from "react-dom";
import { Component2 } from "./Components/Component2";

export class MyFirstPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    /**
     * Empty constructor.
     */
    private _context: ComponentFramework.Context<IInputs>;
    //private _MyInputElement: HTMLInputElement;
    private _notifyOutputChanged: () => void;
    private _parentContainer: HTMLDivElement;
   // private _latestvalue: string;
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // Add control initialization code
        alert("Initialisation");
        //this._MyInputElement = document.createElement("input");
       // this._MyInputElement.id = ("pcfinput");
        this._context = context;
        this._parentContainer = container;
        //this._notifyOutputChanged = notifyOutputChanged;
       // this._MyInputElement.addEventListener("change",this.onChange.bind(this));
        //container.appendChild(this._parentContainer);
        }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
         // alert("UpdateView");
        // Add code to update control view
        ReactDOM.render(
          React.createElement(Component1,{ context:this._context }),
          this._parentContainer
        );

       
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs
    {
        alert("getOutputs");
       
        return {
            //sampleProperty: this._latestvalue,
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        //this._MyInputElement.removeEventListener("change", this.onChange);
        // Add code to cleanup control if necessary
    }
}

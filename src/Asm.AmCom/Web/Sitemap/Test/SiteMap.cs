﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.Xml.Serialization;

// 
// This source code was auto-generated by xsd, Version=4.6.1055.0.
// 


/// <remarks/>
[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.6.1055.0")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlTypeAttribute(AnonymousType=true, Namespace="https://andrewmclachlan.com/schemas/SiteMap.xsd")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="https://andrewmclachlan.com/schemas/SiteMap.xsd", IsNullable=false)]
public partial class siteMap {
    
    private siteMapNode[] siteMapNodeField;
    
    /// <remarks/>
    [System.Xml.Serialization.XmlElementAttribute("siteMapNode")]
    public siteMapNode[] siteMapNode {
        get {
            return this.siteMapNodeField;
        }
        set {
            this.siteMapNodeField = value;
        }
    }
}

/// <remarks/>
[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.6.1055.0")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlTypeAttribute(Namespace="https://andrewmclachlan.com/schemas/SiteMap.xsd")]
public partial class siteMapNode {
    
    private siteMapNode[] siteMapNode1Field;
    
    private string urlField;
    
    private string titleField;
    
    private string descriptionField;
    
    private bool visibleField;
    
    private float priorityField;
    
    private bool priorityFieldSpecified;
    
    public siteMapNode() {
        this.descriptionField = "";
        this.visibleField = true;
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlElementAttribute("siteMapNode")]
    public siteMapNode[] siteMapNode1 {
        get {
            return this.siteMapNode1Field;
        }
        set {
            this.siteMapNode1Field = value;
        }
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlAttributeAttribute()]
    public string url {
        get {
            return this.urlField;
        }
        set {
            this.urlField = value;
        }
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlAttributeAttribute()]
    public string title {
        get {
            return this.titleField;
        }
        set {
            this.titleField = value;
        }
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlAttributeAttribute()]
    [System.ComponentModel.DefaultValueAttribute("")]
    public string description {
        get {
            return this.descriptionField;
        }
        set {
            this.descriptionField = value;
        }
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlAttributeAttribute()]
    [System.ComponentModel.DefaultValueAttribute(true)]
    public bool visible {
        get {
            return this.visibleField;
        }
        set {
            this.visibleField = value;
        }
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlAttributeAttribute()]
    public float priority {
        get {
            return this.priorityField;
        }
        set {
            this.priorityField = value;
        }
    }
    
    /// <remarks/>
    [System.Xml.Serialization.XmlIgnoreAttribute()]
    public bool prioritySpecified {
        get {
            return this.priorityFieldSpecified;
        }
        set {
            this.priorityFieldSpecified = value;
        }
    }
}

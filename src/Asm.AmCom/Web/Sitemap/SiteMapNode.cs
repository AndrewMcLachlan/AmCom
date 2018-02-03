using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Asm.AmCom.Web.Sitemap
{
    [Serializable]
    [XmlType(TypeName = "siteMapNode", Namespace = SiteMap.Namespace)]
    public class SiteMapNode
    {
        [XmlElement("siteMapNode", Namespace = SiteMap.Namespace)]
        public List<SiteMapNode> Nodes { get; set; }

        [XmlAttribute(AttributeName = "url")]
        public string Url
        {
            get; set;
        }

        [XmlAttribute(AttributeName = "area", Namespace = SiteMap.Namespace)]
        public string Area
        {
            get; set;
        }

        [XmlAttribute(AttributeName = "controller", Namespace = SiteMap.Namespace)]
        public string Controller
        {
            get; set;
        }

        [XmlAttribute(AttributeName = "action", Namespace = SiteMap.Namespace)]
        public string Action
        {
            get; set;
        }

        [XmlAttribute(AttributeName = "title", Namespace = SiteMap.Namespace)]
        public string Title
        {
            get; set;
        }


        [XmlAttribute(AttributeName = "description", Namespace = SiteMap.Namespace)]
        public string Description
        {
            get; set;
        }

        [XmlAttribute(AttributeName = "priority", Namespace = SiteMap.Namespace)]
        public float Priority
        {
            get; set;
        }

        [XmlIgnore]
        public bool PrioritySpecified
        {
            get; set;
        }

        [XmlAttribute(AttributeName = "visible", Namespace = SiteMap.Namespace)]
        public bool Visible { get; set; } = true;

        [XmlIgnore]
        public bool VisibleSpecified { get; set; }

        [XmlIgnore]
        public SiteMapNode ParentNode { get; set; }

        [XmlIgnore]
        public int Level { get; set; }

        public override bool Equals(object obj)
        {
            var node = obj as SiteMapNode;
            if (obj == null || node == null)
            {
                return false;
            }

            return String.Equals(this.Area, node.Area, StringComparison.OrdinalIgnoreCase) &&
                String.Equals(this.Controller, node.Controller, StringComparison.OrdinalIgnoreCase) &&
                String.Equals(this.Action, node.Action, StringComparison.OrdinalIgnoreCase);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public static bool operator ==(SiteMapNode l, SiteMapNode r)
        {
            if ((object)l == null && (object)r == null) return true;
            if ((object)l == null || (object)r == null) return false;

            return l.Equals(r);
        }

        public static bool operator !=(SiteMapNode l, SiteMapNode r)
        {
            if (l == null && r == null) return false;
            if (l == null || r == null) return true;

            return !l.Equals(r);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Web;
using RegexGroup = System.Text.RegularExpressions.Group;

namespace Asm.AmCom.Web.Areas.Tools.Models
{
    [DataContract]
    public class RegexTestRequest
    {
        [DataMember]
        public string Regex { get; set; }

        [DataMember]
        public string Text { get; set; }
    }

    public class RegexTestResponse
    {
        public bool Success { get; set; }

        public List<Group> Groups { get; set; }

        public static RegexTestResponse FromMatch(Match match)
        {
            List<Group> groups = new List<Group>();
            foreach (RegexGroup group in match.Groups)
            {
                groups.Add(Group.FromGroup(group));
            }

            return new RegexTestResponse
            {
                Success = match.Success,
                Groups = groups,
            };
        }
    }

    public class Group
    {
        public int Index { get; set; }

        public int Length { get; set; }

        public bool Success { get; set; }

        public string Value { get; set; }

        public static Group FromGroup(RegexGroup group)
        {
            return new Group
            {
                Success = group.Success,
                Index = group.Index,
                Length = group.Length,
                Value = group.Value,
            };
        }
    }
}
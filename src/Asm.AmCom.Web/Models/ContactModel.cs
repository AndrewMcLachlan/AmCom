using System.ComponentModel.DataAnnotations;
using Asm.AmCom.Web.Resources;

namespace Asm.AmCom.Web.Models
{
    public class ContactModel
    {
        [Required(ErrorMessageResourceType = typeof(ContactResources), ErrorMessageResourceName = "NameValidation")]
        public string Name { get; set; }

        [Required(ErrorMessageResourceType = typeof(ContactResources), ErrorMessageResourceName = "EmailValidation")]
        [DataTypeValidator(DataType.EmailAddress, ErrorMessageResourceType = typeof(ContactResources), ErrorMessageResourceName = "EmailRegExValidation")]
        public string Email { get; set; }

        [Required(ErrorMessageResourceType = typeof(ContactResources), ErrorMessageResourceName = "MessageValidation")]
        [BannedWordsValidator("http://", "https://", " sex ", "sexy", "make more money", "a girl for the night", ErrorMessageResourceType = typeof(ContactResources), ErrorMessageResourceName = "MessageBannedWordsValidation")]
        public string Message { get; set; }
    }
}
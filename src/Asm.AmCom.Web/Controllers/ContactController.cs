using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using Asm.AmCom.Web.Models;
using System.Configuration;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Controllers
{
    public class ContactController : Controller
    {
        private const string SubjectFormat = "Contact From {0} ({1})";

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(ContactModel model)
        {
            if (ModelState.IsValid)
            {
                if (SendMail(model))
                {
                    return View("Message", new MessageModel { Title = "Thank You", Message = "Thanks for contacting me. I'll get back to you as soon as possible.", Heading = "Contact" });
                }
                else
                {
                    const string mailToFormat =  "<a href=\"mailto:career@andrewmclachlan.com?subject={0}&body={1}\">career@andrewmclachlan.com</a>";

                    return View("Message", new MessageModel { Title = "Sorry", Message = "Sorry, there has been a problem sending the contact request. You can email me direct at " + String.Format(mailToFormat, String.Format(SubjectFormat, model.Name, model.Email), model.Message), Heading = "Contact" });
                }
            }

            return View();
        }

        private bool SendMail(ContactModel model)
        {
            /*SmtpSection section = (SmtpSection)ConfigurationManager.GetSection(@"system.net/mailSettings/smtp");

            if (section == null)
            {
                return false;
                //throw new ConfigurationErrorsException("Application not configured to send mail.");
            }

            string from = String.IsNullOrEmpty(section.From) ? model.Email : section.From;

            using (SmtpClient client = new SmtpClient())
            {
                MailAddress fromAddress = new MailAddress(from, "AndrewMcLachlan.com");

                using (MailMessage message = new MailMessage(from, ConfigurationManager.AppSettings["ContactRecipient"]))
                {
                    message.Subject = String.Format(SubjectFormat, model.Name, model.Email);
                    message.Body = model.Message;

                    try
                    {
                        client.Send(message);
                    }
                    catch (SmtpException)
                    {
                        return false;
                    }
                }
            }*/
            return true;
        }
    }
}

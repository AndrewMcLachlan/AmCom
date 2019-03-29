﻿using System;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Asm.AmCom.Web.Models;
using Asm.AmCom.Web.Resources;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Asm.AmCom.Web.Controllers
{
    public class ContactController : Controller
    {
        private IConfiguration _configuration;
        private ILogger _logger;

        public ContactController(IConfiguration configuration, ILogger<ContactController> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Index(ContactModel model)
        {
            if (ModelState.IsValid)
            {
                if (await SendMail(model))
                {
                    return View("Message", new MessageModel { Title = "Thank You", Message = "Thanks for contacting me. I'll get back to you as soon as possible.", Heading = "Contact" });
                }
                else
                {
                    const string mailToFormat =  "<a href=\"mailto:info@andrewmclachlan.com?subject={0}&body={1}\">info@andrewmclachlan.com</a>";

                    return View("Message", new MessageModel { Title = "Sorry", Message = "Sorry, there has been a problem sending the contact request. You can email me direct at " + String.Format(mailToFormat, String.Format(_configuration["Mail:SubjectFormat"], model.Name, model.Email), model.Message), Heading = "Contact" });
                }
            }
            else if (ModelState.Values.SelectMany(v => v.Errors).Any(e => e.ErrorMessage == ContactResources.MessageBannedWordsValidation))
            {
                _logger.LogInformation("Probable spam message: {0} {1} {2} ", model.Name, model.Email, model.Message);
            }

            return View();
        }

        private async Task<bool> SendMail(ContactModel model)
        {
            using (SmtpClient client = new SmtpClient(_configuration["Mail:Host"], _configuration.GetValue<int>("Mail:Port")))
            {
                client.Credentials = new NetworkCredential(_configuration["Mail:UserName"], _configuration["Mail:Password"]);
                MailAddress fromAddress = new MailAddress(_configuration["Mail:From:Address"], _configuration["Mail:From:Display"]);
                MailAddress toAddress = new MailAddress(_configuration["Mail:To"]);

                using (MailMessage message = new MailMessage(fromAddress, toAddress))
                {
                    message.Subject = String.Format(_configuration["Mail:SubjectFormat"], model.Name, model.Email);
                    message.Body = model.Message;

                    try
                    {
                        await client.SendMailAsync(message);
                        return true;
                    }
                    catch (SmtpException)
                    {
                        return false;
                    }
                }
            }
        }
    }
}

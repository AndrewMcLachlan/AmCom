﻿using System.ComponentModel.DataAnnotations;

namespace Asm.AmCom
{
    /// <summary>
    /// Validates against data type.
    /// </summary>
    public class BannedWordsValidatorAttribute : ValidationAttribute
    {
        public string[] BannedWords { get; set; } = [];

        #region Constructors
        /// <summary>
        /// Initializes a new instance of the <see cref="DataTypeValidatorAttribute"/> class.
        /// </summary>
        /// <param name="customDataType">A custom data type.</param>
        public BannedWordsValidatorAttribute(params string[] bannedWords) : base()
        {
            BannedWords = bannedWords;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="DataTypeValidatorAttribute"/> class.
        /// </summary>
        /// <param name="dataType">The expected data type.</param>
        public BannedWordsValidatorAttribute(string errorMessage) : base(errorMessage)
        {
        }
        #endregion

        #region Protected Methods
        /// <summary>
        /// Tests to see if this rule is valid.
        /// </summary>
        /// <param name="value">The vale to test.</param>
        /// <param name="validationContext">The validation context.</param>
        /// <returns>A validation result.</returns>
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is string text && BannedWords.Any(b => text.ToLowerInvariant().Contains(b)))
            {
                return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
            }

            return ValidationResult.Success;
        }
        #endregion
    }
}

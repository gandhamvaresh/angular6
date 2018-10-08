"use strict";
exports.__esModule = true;
var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    // Validates URL
    CustomValidator.urlValidator = function (url) {
        if (url.pristine) {
            return null;
        }
        var URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        url.markAsTouched();
        if (URL_REGEXP.test(url.value)) {
            return null;
        }
        return {
            invalidUrl: true
        };
    };
    // Validates passwords
    CustomValidator.matchPassword = function (group) {
        var password = group.controls.password;
        var confirm = group.controls.confirm;
        if (password.pristine || confirm.pristine) {
            return null;
        }
        group.markAsTouched();
        if (password.value === confirm.value) {
            return null;
        }
        return {
            invalidPassword: true
        };
    };
    // Validates numbers
    CustomValidator.numberValidator = function (number) {
        if (number.pristine) {
            return null;
        }
        var NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
        number.markAsTouched();
        if (NUMBER_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    };
    // Validates US SSN
    CustomValidator.ssnValidator = function (ssn) {
        if (ssn.pristine) {
            return null;
        }
        var SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
        ssn.markAsTouched();
        if (SSN_REGEXP.test(ssn.value)) {
            return null;
        }
        return {
            invalidSsn: true
        };
    };
    // Validates US phone numbers
    CustomValidator.phoneValidator = function (number) {
        if (number.pristine) {
            return null;
        }
        var PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value))
            return null;
    };
    return CustomValidator;
}());
exports.CustomValidator = CustomValidator;
return {
    invalidNumber: true
};
zipCodeValidator(zip);
any;
{
    if (zip.pristine) {
        return null;
    }
    var ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
    zip.markAsTouched();
    if (ZIP_REGEXP.test(zip.value)) {
        return null;
    }
    return {
        invalidZip: true
    };
}

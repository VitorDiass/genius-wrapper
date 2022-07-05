import { text_format, text_format_types } from "../interfaces";

export const format_text = (textFormat?: text_format) => {
    console.log(textFormat?.text_format);
    let textFormatReturn = "";

    if (textFormat?.text_format && textFormat?.text_format.length > 0) {
        textFormat.text_format.forEach((textFormatType: text_format_types | undefined) => {
            textFormatReturn += textFormatType + ",";
        });
    } else {
        textFormatReturn = "dom"; // default
    }

    return textFormatReturn;
};

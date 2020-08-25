import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class SaveAsWrapperService {
  canvas2CaptureImg;

  saveAsPdf = (pageContent: any) => {
    const doc = new jsPDF('l', 'mm', 'a4');
    // const doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [4, 2]
    // });

    html2canvas(pageContent).then(_canvas => {
      const img = _canvas.toDataURL("image/png");

      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      doc.addImage(img, 'png', bufferX, bufferY, pdfWidth, pdfHeight, undefined);
      doc.save("two-by-four.pdf");
    })

  }

  constructor() { }
}

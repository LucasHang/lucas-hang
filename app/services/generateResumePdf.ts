import { t } from "i18next";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

/** will generate and download the generated pdf */
export async function generateResumePdf(locale: "pt" | "en") {
  const responseData = await fetch(`locales/${locale}/translation.json`).then(
    (res) => res.json()
  );

  if (!responseData || !responseData.resume) {
    console.error("Error fetching data");
    return;
  }

  const data = responseData.resume;

  const docDefinition = {
    content: [
      { text: data.name, fontSize: 20, bold: true },
      { text: data.title, fontSize: 14, margin: [0, 0, 0, 10] },

      { text: data.location, fontSize: 12, margin: [0, 0, 0, 10] },

      { text: `${t("contacts_phone")}: ${data.contact.mobile}`, fontSize: 10 },
      { text: `Email: ${data.contact.email}`, fontSize: 10 },
      { text: `LinkedIn: ${data.contact.linkedin}`, fontSize: 10 },
      {
        text: `${t("contacts_portfolio")}: ${data.contact.portfolio}`,
        fontSize: 10,
      },
      {
        text: `GitHub: ${data.contact.github}`,
        fontSize: 10,
        margin: [0, 0, 0, 10],
      },

      { text: data.summary, fontSize: 12, margin: [0, 0, 0, 10] },

      {
        text: t("sections_experience"),
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 5, lineWidth: 1 }],
      }, // Horizontal line
      ...data.experience.map((exp: any) => [
        { text: exp.company, fontSize: 12, bold: true },
        { text: `${exp.position} (${exp.duration})`, fontSize: 10 },
        { text: exp.location, fontSize: 10, margin: [0, 0, 0, 5] },
        { text: exp.description, fontSize: 10, margin: [0, 0, 0, 10] },
      ]),

      {
        text: t("sections_education"),
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 5, lineWidth: 1 }],
      }, // Horizontal line
      ...data.education.map((edu: any) => [
        { text: edu.institution, fontSize: 12, bold: true },
        { text: `${edu.degree} (${edu.duration})`, fontSize: 10 },
        { text: "", fontSize: 10, margin: [0, 0, 0, 10] },
      ]),

      {
        text: t("sections_skills"),
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 5, lineWidth: 1 }],
      }, // Horizontal line
      { ul: data.skills, fontSize: 10, margin: [0, 0, 0, 10] },

      {
        text: t("sections_certifications"),
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 5, lineWidth: 1 }],
      }, // Horizontal line
      { ul: data.certifications, fontSize: 10, margin: [0, 0, 0, 10] },

      {
        text: t("sections_projects"),
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 5, lineWidth: 1 }],
      }, // Horizontal line
      ...data.projects.map((project: any) => [
        { text: project.name, fontSize: 12, bold: true },
        { text: project.description, fontSize: 10 },
        {
          text: project.link,
          fontSize: 10,
          margin: [0, 0, 0, 10],
          link: project.link,
        },
      ]),
    ],
  };

  const filename = `CV-Lucas_Hang-${locale.toUpperCase()}.pdf`;

  pdfMake.createPdf(docDefinition).download(filename);
}

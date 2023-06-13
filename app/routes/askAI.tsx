import { json } from "@remix-run/node";
import type { LinksFunction, ActionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";
import Send from "~/components/Icons/Send";

import stylesUrl from "~/styles/askAI.css";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();

  const question = body.get("question") as string | null;
  const resumeData = body.get("resumeData") as string | null;

  if (!question || !resumeData) {
    return json({
      status: "emptyQuestion",
      question: question || "",
      response: "",
    });
  }

  const result = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAPI_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Act as Lucas Hang assistent and help recruiters answering their questions about him using his curriculumn as reference (If you can't answer the question, suggest the recruiter to look around the website or contact Lucas directly).\nCurriculumn: ${JSON.stringify(
        resumeData
      )}.\nQuestion: ${question}?\nYour Answer:`,
      max_tokens: 500,
    }),
  });

  const resultJson = await result.json();

  if (!resultJson || !resultJson.choices.length) {
    return json({
      status: "noResults",
      question,
      response: "",
    });
  }

  return json({
    status: "resultsFound",
    question,
    response: resultJson.choices[0].text,
  });
};

export default function AskAI() {
  const [loading, setLoading] = useState(false);
  const [resumeData, setResumeData] = useState("");

  const data = useActionData<typeof action>();

  const { t, i18n } = useTranslation();

  const locale = (i18n.language || "en") as "pt" | "en";

  useEffect(() => {
    if (!locale) return;

    setLoading(true);

    fetch(`locales/${locale}/translation.json`)
      .then((res) => res.json())
      .then((json) => {
        if (!json || !json.resume) {
          alert(
            "Sorry, we couldn't load the resume data. Please reload the page and try again."
          );

          return;
        }

        setResumeData(JSON.stringify(json.resume));
      })
      .finally(() => setLoading(false));
  }, [locale]);

  return (
    <div className="askAI-container">
      <ContentHeader title={t("question_askAI")} />

      <div className="content">
        <h4>{t("askAI_title")}</h4>

        <p>{t("askAI_description")}</p>

        <Form method="post">
          <input
            type="text"
            name="question"
            defaultValue={data?.question}
            placeholder="Is Lucas a good candidate for a backend position?"
            autoComplete="off"
          />

          <input type="hidden" name="resumeData" value={resumeData} />

          <button type="submit" disabled={loading}>
            <Send />
          </button>
        </Form>

        <div className="response">
          {!!data?.response && <p>{data.response}</p>}
        </div>
      </div>
    </div>
  );
}

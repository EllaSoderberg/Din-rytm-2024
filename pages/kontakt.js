import { Component } from "react";
import PageContainer from "@/components/PageContainer";
import Form from "../components/form";
import { attributes } from "@/content/kontakt.md"

export default class Kontakt extends Component {
  render() {
    let { phone, email } = attributes
    return (
      <div>
        <PageContainer>
          <div></div>
          <div className="font-bold text-3xl py-4">Kontakt:</div>
          <p className="pb-8 px-8">
            <b>Malin Söderberg</b>
            <br></br>
            PHD, Leg. barmorska
            <br></br>
            Psykoterapeut KBT/CFT
            <br></br>
            Handledare FAM, MediYogaterapeut
            <br></br>
            <br></br>
            Telefon: <a href={"tel:" + phone}>{phone}</a>
            <br></br>
            Mail: <a href={"mailto:" + email}>{email}</a>
            <br></br>
            <br></br>
            Address till mottagning:
            <br></br>
            Långholmsgatan 20
            <br></br>
            117 33 Stockholm
            <br></br>
            <br></br>
            <b>
              Välkommen att höra av dig om du har frågor eller vill boka en tid.
            </b>
          </p>
          <Form></Form>
        </PageContainer>
      </div>
    );
  };
}
import React from "react";
import Section from "../Section/Section";
import { technical, technical__child, technical__child_name, technical__child_value } from "./TechnicalData.module.scss";

export default function TechnicalData({ data }) {
    return (
        <Section title="Технические характеристики" isGrey={false}>
            <div className={technical}>
                {data
                    ? data.map((item, i) => (
                          <>
                              <div className={`${technical__child} ${technical__child_name}`}>{item.name}</div>
                              <div className={`${technical__child} ${technical__child_value}`}>{item.value}</div>
                          </>
                      ))
                    : null}
            </div>
        </Section>
    );
}

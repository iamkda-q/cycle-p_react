import React from "react";
import Section from "../Section/Section";
import { technical, technical__child, technical__child_name, technical__child_value, technical__child_grey } from "./TechnicalData.module.scss";

export default function TechnicalData({ data, isGrey }) {
    return (
        <Section title="Технические характеристики" isGrey={isGrey}>
            <div className={technical}>
                {data
                    ? data.map((item, i) => (
                          <>
                              <div className={`${technical__child} ${technical__child_name} ${isGrey ? technical__child_grey : ""}`}>{item.name}</div>
                              <div className={`${technical__child} ${technical__child_value} ${isGrey ? technical__child_grey : ""}`}>{item.value}</div>
                          </>
                      ))
                    : null}
            </div>
        </Section>
    );
}

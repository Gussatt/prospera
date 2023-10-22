import React from "react";


export default function Sim() {
  return (
    <section className="bg-blue">
      <form className="mx-auto flex w-11/12 bg-green">
        <fieldset className="w-full">
          <legend className="text-left font-bold text-header">
            Qual o seu investimento?
          </legend>

          <div className="grid w-full grid-cols-2">
            <div className="flex flex-col">
              <label className="text-header"> Tipo de investimento </label>

              <div className="flex w-1/2 justify-between">
                <label for="cdb" className="text-header">
                  <input
                    type="radio"
                    id="cdb"
                    name="investment"
                    value="CDB"
                    defaultChecked="true"
                  />
                  <span>CDB</span>
                </label>
                <label for="lci-lca" className="text-header">
                  <input
                    type="radio"
                    id="lci-lca"
                    name="investment"
                    value="LCI/LCA"
                  />
                  <span>LCI/LCA</span>
                </label>
                <label for="tesouro" className="text-header">
                  <input
                    type="radio"
                    id="tesouro"
                    name="investment"
                    value="TESOURO"
                  />
                  <span>Tesouro</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-header">
                O investimento é Pré ou Pós-fixado?
              </label>

              <div className="flex w-1/2 justify-between">
                <label for="cdb" className="text-header">
                  <input
                    type="radio"
                    id="pre"
                    name="fixed"
                    value="pos"
                    defaultChecked="true"
                  />
                  <span>Pré-fixado</span>
                </label>
                <label for="lci-lca" className="text-header">
                  <input type="radio" id="pos" name="fixed" value="pos" />
                  <span>Pós-fixado</span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid-col-2 grid w-full bg-midnight">
            <div className="flex flex-col">
              <label className="text-header">
                <input type="text" />
              </label>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

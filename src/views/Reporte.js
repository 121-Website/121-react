import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import useLocoScroll from '../hooks/useLocoScroll';
import { GetLeadsAPI } from '../utils/getLeads';
import UIButton from '../components/UI/UIButton';
import { arrayToExcel } from '../utils/ArrayToExcel';

export default function Reporte() {
    useLocoScroll(true);

    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [headers, setHeaders] = useState([
        'Nombre',
        'Correo',
        'Telefono',
        'Mensaje',
        'Fecha de Creación',
        'Fecha de Update',
    ]);
    const [body, setBody] = useState('');

    useEffect(() => {
        GetLeadsAPI()
            .then((data) => {
                console.log(data);
                setLeads(data.data);
                setLoading(false);
                const body = [];
                data.data.map((dataRow) => {
                    body.push(dataRow.attributes);
                });
                setBody(body);
                console.log(body);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    function tableHeaders() {
        return (
            <tr className="pb-10 text-left uppercase border-b-2 text-xxs text-indigo border-b-indigo">
                <th className="py-4 pr-4">Nombre</th>
                <th className="py-4">Correo</th>
                <th className="py-4">Telefono</th>
                <th className="py-4">Mensaje</th>
                <th className="py-4">Fecha de Creación</th>
                <th className="py-4">Fecha de Update</th>
            </tr>
        );
    }

    function tableBody(dataRow) {
        return (
            <React.Fragment>
                {dataRow.map((dataRow, index) => (
                    <tr key={index} className="text-xs text-left">
                        <td>{dataRow.attributes.name}</td>
                        <td>{dataRow.attributes.email}</td>
                        <td>{dataRow.attributes.phone}</td>
                        <td>{dataRow.attributes.message}</td>
                        <td>{dataRow.attributes.updatedAt}</td>
                    </tr>
                ))}
            </React.Fragment>
        );
    }

    return (
        <>
            <div
                className="flex flex-col overflow-x-hidden bg-white"
                id="main-container">
                <div
                    data-scroll-section
                    className="relative flex pt-24 bg-amarillo grow">
                    <div className="flex flex-col-reverse items-center justify-center gap-10 my-10 grow lg:flex-row ">
                        <div className="flex flex-col text-left text-[64px] justify-center font-bold tracking-tighter lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px] text-indigo">
                            Reporte de Leads
                        </div>
                        <div
                            className="w-full sm:max-w-[240px] mx-auto md:max-w-[240px] lg:max-w-[240px] bg-center bg-no-repeat bg-contain aspect-video"
                            style={{
                                backgroundImage:
                                    'url(/assets/images/hablemos.svg)',
                            }}></div>
                    </div>
                </div>

                <div
                    data-scroll-section
                    className="relative gap-4 flex grow min-h-[640px] md:min-h-[980px]">
                    <div className="container p-20 font-bold">
                        <div className="flex items-center justify-between p-4 tracking-tight rounded-lg bg-slate-200">
                            <div className="text-slate-500">
                                Descargar el último reporte disponible
                            </div>
                            <UIButton
                                onClick={() => {
                                    console.log('descargar');
                                    arrayToExcel.convertArrayToTable(
                                        headers,
                                        body,
                                        'reporteleads'
                                    );
                                }}>
                                descargar
                            </UIButton>
                        </div>

                        <table className="w-full border-separate table-auto border-spacing-6 ">
                            <thead>{tableHeaders()}</thead>
                            <tbody>{tableBody(leads)}</tbody>
                        </table>
                    </div>
                </div>

                <div>Descargar Reporte</div>

                <div data-scroll-section>
                    <Footer custom next={'/*'} prev={'/soy121/'} />
                </div>
            </div>
        </>
    );
}

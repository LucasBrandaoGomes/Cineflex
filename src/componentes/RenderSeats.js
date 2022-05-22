import styled from "styled-components"
import axios from "axios"
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

export default function RenderSeats(){
    
    const { idSessao } = useParams();
    const [lugares, setLugares] = React.useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
          setLugares([...response.data]);
        });
      }, []);
}
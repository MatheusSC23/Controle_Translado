import styles from '../css/ItemTranslado.module.css'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { format } from 'date-fns'

const axios = require('axios')

export default function ItemTranslado({translado}){
	return(
		<div className={styles.itemContainer}>
			<label>{format(new Date(translado.data),'dd/MM/yyyy')}</label>
			<label>{translado.descricao}</label>
			<label>{translado.nome}</label>
			<label>{translado.turno}</label>
		</div>

	);

}
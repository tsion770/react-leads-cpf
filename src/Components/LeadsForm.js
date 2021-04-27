import React, { useState } from 'react'
import utils from '../utils'
import '../Components_Css/leadsForm.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
        root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        },
}));


const LeadsForm = (props) => {

    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [numeroDeTelephone, setNumeroDeTelephone] = useState(0)
    const [email, setEmail] = useState("")
    const [formation, setFormation] = useState("")
    const classes = useStyles();

    const errors = {}

    if (!prenom) {
        errors.prenom = "Obligatoire";
    } else if(prenom.length<3){
        errors.prenom = 'veuillez saisir votre Prenom'
    }

    if (!nom) {
        errors.nom = 'Obligatoire';
    } else if(nom.length<3){
        errors.nom = 'veuillez saisir votre Nom de Famille'
    }

    if (!numeroDeTelephone) {
        errors.numeroDeTelephone = 'Obligatoire';
        } else if(numeroDeTelephone.length<10){
            errors.numeroDeTelephone = 'votre numero de telephone doit contenir 10 numeros'
        }

        if (!email) {
            errors.email = 'Obligatoire';
        }

        if (!formation) {
            errors.formation = 'Obligatoire';
        }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        let obj = {
            prenom,
            nom, 
            numeroDeTelephone,
            email,
            formation
        }

        let resp = await utils.addNewLead("http://localhost:8001/formation-cpf/", obj)
                    alert("Votre inscription a bien etait envoyer!")
    }

    return (
    <div >
        <h2 style={{textAlign:"center", marginTop:"30px"}}> Saisir votre droit a la formation </h2>
        <div className="formStructure">
        
        <form onSubmit={handleSubmit} className="form" className={classes.root} noValidate autoComplete="off">

            <TextField id="standard-basic" className="input" onChange={e=> setPrenom(e.target.value)} label="Prenom" required/>
                {/* <div> {errors.prenom} </div> */}
            <TextField id="standard-basic" className="input" onChange={e=> setNom(e.target.value)} label="Nom"/> <br/><br/>

            <TextField id="standard-basic" className="input" onChange={e=> setNumeroDeTelephone(e.target.value)} label="Numero de Telephone"/>

            <TextField id="standard-basic" className="input" onChange={e=> setEmail(e.target.value)} type="email" label="E-mail"/><br/><br/>

            <TextField id="standard-basic" className="input" onChange={e=> setFormation(e.target.value)} label="Choix de Formation"/> <br/><br/> <br/>

            <Button style={{marginLeft:"23%"}} type="submit" variant="contained" color="primary">
                Register
            </Button>
            {/* <input type="submit" style={{marginLeft:"23%"}} value="Register" className="submitButton" /><br/> */}

        </form>
        </div>
    </div>
    );
}
export default LeadsForm;
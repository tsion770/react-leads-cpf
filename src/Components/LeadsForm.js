import React from 'react'
import utils from '../utils'
import '../Components_Css/leadsForm.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
        root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        },
}));

    

const LeadsForm = (props) => {

    const classes = useStyles();

    return (
    <div >
        <h2 style={{textAlign:"center", marginTop:"30px"}}> Saisir votre droit a la formation </h2>
        <div className="formStructure">
        <Formik initialValues={{ prenom: '', nom: '', numeroDeTelephone: '', email: '', formation: '' }}
            validate={values => {
                const errors = {};

                if (!values.prenom) {
                errors.prenom = 'Obligatoire';
                } else if(values.prenom.length<3){
                    errors.prenom = 'veuillez saisir votre Prenom'
                }

                if (!values.nom) {
                    errors.nom = 'Obligatoire';
                } else if(values.nom.length<3){
                    errors.nom = 'veuillez saisir votre Nom de Famille'
                }

                if (!values.numeroDeTelephone) {
                    errors.numeroDeTelephone = 'Obligatoire';
                    } else if(values.numeroDeTelephone.length<10){
                        errors.numeroDeTelephone = 'votre numero de telephone doit contenir 10 numeros'
                    }

                    if (!values.email) {
                        errors.email = 'Obligatoire';
                    }

                    if (!values.formation) {
                        errors.formation = 'Obligatoire';
                    }

                return errors;
            }}

            onSubmit={async (values, { setSubmitting }) => {

                    let resp = await utils.addNewLead("http://localhost:8001/formation-cpf/", values)
                    alert("Votre inscription a bien etait envoyer!")
            }}
        >
            {({ isSubmitting }) => (
        <Form className="form" className={classes.root} noValidate autoComplete="off">

                {/* <TextField id="standard-basic" label="Prenom" /> */}
            {/* <label htmlFor="prenom" className="label"> Votre Prenom </label> <br/> */}
            <TextField id="standard-basic" name="prenom" className="input" label="Prenom"/>
            <ErrorMessage name="prenom" component="div" className="error"/>

            {/* <label htmlFor="nom" className="label"> Votre Nom de Famille </label><br/> */}
            <TextField type="text" name="nom" className="input" label="Nom"/>
            <ErrorMessage name="nom" component="div" className="error"/> <br/><br/>

            {/* <label htmlFor="numeroDeTelephone" className="label"> Votre Numero de Telephone </label><br/> */}
            <TextField type="text" name="numeroDeTelephone" className="input" label="Numero de Telephone"/>
            <ErrorMessage name="numeroDeTelephone" component="div" className="error"/> 

            {/* <label htmlFor="posteActuelle" className="label"> Email </label><br/> */}
            <TextField type="text" name="email" className="input" label="E-mail"/>
            <ErrorMessage name="email" component="div" className="error"/> <br/><br/>

            {/* <label htmlFor="formation" className="label"> Quelle formation pourrait eventuellement vous interesser? </label><br/> */}
            <TextField type="text" name="formation" className="input" label="Choix de Formation"/>
            <ErrorMessage name="formation" component="div" className="error"/> <br/> <br/><br/>

            <input type="submit" style={{marginLeft:"23%"}} value="Register" disabled={isSubmitting} className="submitButton" /><br/>

        </Form>
        )}
        </Formik>
        </div>
    </div>
    );
}
export default LeadsForm;
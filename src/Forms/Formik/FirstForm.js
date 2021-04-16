import React from 'react'
import { Formik, Field, Form, useField, FieldArray } from "formik"
import { Button, TextField, Checkbox, Radio, FormControlLabel, Select, MenuItem } from "@material-ui/core"
import * as yup from 'yup'

const MyRadio = ({ label, ...props }) => {
    const [field] = useField(props)
    return (
        <FormControlLabel {...field} control={<Radio />} label={label} />
    )
}

const MyTextField = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ""
    return (
        <TextField
            placeholder={placeholder}
            {...field}
            helperText={errorText}
            error={!!errorText} // this make the color of error is red
        />
    )
}

const validationSchema = yup.object({
    firstName: yup.string().required().max(10),
    pets: yup.array().of(
        yup.object({
            name:yup.string().required()
        })
    )
})
function FirstForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    Cookies: [], // array means multiple checkbox
                    yogurt: "",
                    pets: [{ type: "cat", name: "saly" }]
                }}

                // we will use yup in validation instead of this

                // validate={values => {
                //     const errors = {}

                //     if (values.firstName.includes("bob")) {
                //         errors.firstName = "no bob"
                //     }
                //     return errors
                // }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmiting }) => {
                    setSubmiting(true)
                    // make async call
                    console.log('submit', data)
                    setSubmiting(false)
                }}
            >

                {({ values, errors, isSubmitting }) => (
                    <Form >
                        {/* <Field
                            placeholder="first name"
                            name="firstName"
                            type="input"
                            as={TextField} // apply style from material ui
                        /> */}
                        <MyTextField
                            placeholder="first name"
                            name="firstName"
                            type="input"
                        />
                        <br />
                        <Field
                            placeholder="last name"
                            name="lastName"
                            type="input"
                            as={TextField}
                        />
                        <br />
                        <Field
                            name="isTall"
                            type="checkbox"
                            as={Checkbox}  // apply style from material ui
                        />
                        <div>Cookies:</div>
                        <Field
                            name="Cookies"
                            type="checkbox"
                            value="chocolate"
                            as={Checkbox}
                        />
                        <Field
                            name="Cookies"
                            type="checkbox"
                            value="suger"
                            as={Checkbox}
                        />
                        <Field
                            name="Cookies"
                            type="checkbox"
                            value="any thing"
                            as={Checkbox}
                        />
                        <div>yogurt:</div>
                        {/* <Field  name="yogurt" type="radio" value="peach" as={Radio}/> */}
                        {/* to ba able to add lable */}
                        <MyRadio
                            name="yogurt"
                            type="radio"
                            value="peach"
                            label="peach"
                        />
                        {/* <Field name="yogurt" type="radio" value="blueberry" as={Radio} /> */}
                        <MyRadio
                            name="yogurt"
                            type="radio"
                            value="blueberry"
                            label="blueberry"
                        />
                        {/* <Field name="yogurt" type="radio" value="apple" as={Radio} /> */}
                        <MyRadio
                            name="yogurt"
                            type="radio"
                            value="apple"
                            label="apple"
                        />
                        <FieldArray name="pets">
                            {(arrayHelpers) => (
                                <div>
                                    <Button
                                        onClick={() => {
                                            arrayHelpers.push({
                                                type: "frog",//default type
                                                name: ""
                                            })
                                        }}>
                                        Add pet
                                    </Button>
                                    {values.pets.map((pet, index) => {
                                        return (
                                            <div key={index}>
                                                <MyTextField
                                                    placeholder="pet name"
                                                    name={`pets.${index}.name`}
                                                />
                                                <Field
                                                    name={`pets.${index}.type`}
                                                    type="select"
                                                    as={Select}>
                                                    <MenuItem value="cat">cat</MenuItem>
                                                    <MenuItem value="dog">dog</MenuItem>
                                                    <MenuItem value="frog">frog</MenuItem>
                                                </Field>
                                                <Button
                                                    onClick={() => {
                                                        arrayHelpers.remove(index)
                                                    }}>
                                                    X
                                                </Button>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </FieldArray>
                        <div>
                            <Button type="submit">submit</Button>
                        </div>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </Form>

                )}
            </Formik>
        </div>
    )
}

export default FirstForm

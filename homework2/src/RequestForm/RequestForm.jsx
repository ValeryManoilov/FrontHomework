import { useState } from "react";
import "./RequestForm.css";
import { Formik, Form, Field} from 'formik';
import * as Yup from "yup"
function RequestForm()
{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const validations = Yup.object().shape({
        name: Yup.string().min(4, 'Very short name').max(50, 'Very long name').required("Required"),
        email: Yup.string().email("Invalid email required").required("Required"),
        password: Yup.string().min(6, 'Very short password (less than 6)').required("Required"),
        text: Yup.string().max(200, 'Very long message')
    })

    const [dataConfirm, setDataConfirm] = useState(false)

    function settingDataConfirm(e)
    {
        e.preventDefault();
        setDataConfirm(!dataConfirm)
    }
    function isValid(errors)
    {
        if (!errors.text && !errors.name && !errors.email && !errors.password && dataConfirm)
        {
            return true
        }
        return false
    }
    function setData(values)
    {
        setName(values.name)
        setPassword(values.password)
        setEmail(values.email)
        setText(values.text)
        console.log(name, password, email, text)
    }
    return(
        <>
            <Formik 
            validationSchema={validations}
            initialValues={{
                name: '',
                email: '',
                password: '',
                text: ''
              }}
            onSubmit={values => {
            console.log(values);
            }}
            >
            {({errors, touched, values, isSubmitting}) => (
                <Form className="form__container">
                    <p className="label__text">Имя:</p>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Введите имя"
                            id="name__field"
                            values={values.name}
                        />
                        {errors.name && touched.name ? (<div className="errorMessage">{errors.name}</div>) : null}
                    <p className="label__text">Пароль:</p>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            id="password__field"
                            values={values.password}
                        />
                        {errors.password && touched.password ? (<div className="errorMessage">{errors.password}</div>) : null}
                    <p className="label__text">Почта:</p>
                        <Field
                            type="text"
                            name="email"
                            placeholder="Введите почту"
                            id="email__field"
                            values={values.email}
                        />
                        {errors.email && touched.email ? (<div className="errorMessage">{errors.email}</div>) : null}
                    <p className="label__text">Сообщение:</p>
                        <Field
                            type="text"
                            name="text"
                            placeholder="Введите сообщение"
                            id="textarea__field"
                            values={values.text}
                        />
                        {errors.text && touched.text ? (<div className="errorMessage">{errors.text}</div>) : null}
                    <div className="confirming__container">
                        <div className="checkbox__container" onClick={(event) => settingDataConfirm(event)}>
                            {
                                dataConfirm ? 
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" className="G">
                                    <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"/>
                                </svg>
                                : <></>
                            }
                        </div>
                        <p>Я согласен на обработку персональных данных</p>
                    </div>
                    <button id="send__button" type="submit" style={{backgroundColor: (isValid(errors)) ? "green" : "red"}} onClick={() => {if (isValid(errors)){setData(values)}} }>Отправить</button>
                </Form>

                )
                }
            </Formik>
            <div>
                <p>{name}</p>
                <p>{password}</p>
                <p>{email}</p>
                <p>{text}</p>
            </div>
        </>
    )
}

export default RequestForm

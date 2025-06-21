import axios from 'axios';
import { useState } from 'react'

function GetText() {

    const apiEndpoint = 'YOUR_API_ENDPOINT';
    const [id, setId] = useState("");
    const [text, setText] = useState();
    const [pass, setPass] = useState("");
    const [showAlertError, setShowAlertError] = useState(false);
    const [showAlertText, setShowAlertText] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const getTextFromApi = async (id, password) => {
        if (id.trim() == '' || password.trim() == '') {
            setAlertMessage('ID or password can not be empty');
            setShowAlertError(true);
            setText("");
            setPass("");
            setTimeout(() => {
                setShowAlertError(false);
            }, 5000);
        } else {
            try {
                const response = await axios.post(
                    apiEndpoint,
                    {
                        'id': id,
                        'password': password
                    },
                    {
                        headers: {
                            'accept': '*/*',
                            'Content-Type': 'application/json'
                        }
                    }

                );
                setText(response.data.text);
                setId("");
                setPass("");
                setShowAlertText(true)
                setTimeout(() => {
                    setShowAlertText(false);
                }, 15000);

            } catch (error) {
                setAlertMessage("ID or password wrong!");
                setShowAlertError(true);
                setId("");
                setPass("");
                setTimeout(() => {
                    setShowAlertError(false);
                }, 5000);
            }
        }
    }

    return (
        <div className="container text-center">
            <div className="row justify-content-center mt-4">
                <div>
                    <h3 className='h3-header'>Get Text</h3>
                </div>
                <div className="col-12 col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                        <input value={id} onChange={(e) => setId(e.target.value)} type="text" className="form-control input" id="floatingInput" placeholder="text" />
                        <label htmlFor="floatingInput">ID</label>

                    </div>
                    <div className="form-floating">
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="form-control input" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div>
                        <button type="button" className="btn button mt-3" onClick={() => getTextFromApi(id, pass)}>Get Text</button>
                    </div>
                    {showAlertText && (
                        <div className="alert alert-success mt-3" role="alert">
                            Text: {text}
                        </div>
                    )}
                    {showAlertError && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {alertMessage}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default GetText
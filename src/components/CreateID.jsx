import { useState } from 'react'
import axios from 'axios';

function CreateID() {

    const apiEndpoint = 'YOUR_API_ENDPOINT';
    const [id, setId] = useState();
    const [text, setText] = useState("");
    const [pass, setPass] = useState("");
    const [showAlertError, setShowAlertError] = useState(false);
    const [showAlertID, setShowAlertID] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const getIdFromApi = async (text, password) => {
        if (text.trim() == '' || password.trim() == '') {
            setAlertMessage('Text or password can not be empty');
            setShowAlertError(true);
            setText("");
            setPass("");
            setTimeout(() => {
                setShowAlertError(false);
            }, 5000);
        } else {
            const response = await axios.post(
                apiEndpoint,
                {
                    'text': text,
                    'password': password
                },
                {
                    headers: {
                        'accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                }
            );
            setId(response.data.id);
            setText("");
            setPass("");
            setShowAlertID(true);
            setTimeout(() => {
                setShowAlertID(false);
            }, 5000);
        }

    }

    return (
        <div className="container text-center">
            <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-6 col-sm-12">
                    <div>
                        <h3 className='h3-header'>Create ID</h3>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="form-control input" id="floatingInput" placeholder="text" />
                        <label htmlFor="floatingInput">Text</label>

                    </div>
                    <div className="form-floating">
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="form-control input" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div>
                        <button type="button" className="btn button mt-3" onClick={() => getIdFromApi(text, pass)}>Create ID</button>
                    </div>

                    {showAlertID && (
                        <div className="alert alert-success mt-3" role="alert">
                            ID: {id}
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

export default CreateID
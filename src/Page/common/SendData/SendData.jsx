import './sendData.scss'
const SendData = () => {
    return (
        <div className="containerSendData">
            <div className="containerForm">
                <div className="tileForm">
                    <h2> NHẬP ĐỂ TƯ VẤN</h2>
                </div>
                <div className="inputForm">
                    <input className="iptForm" type="text" />
                    <input className="iptForm" type="text" />
                    <input className="iptForm" type="text" />
                    <button className="btnForm">Send</button>
                </div>
            </div>
        </div>
    )
}
export default SendData
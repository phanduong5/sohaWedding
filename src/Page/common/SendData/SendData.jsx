import './sendData.scss'
const SendData = () => {
    return(
        <div className="containerSendData">
            <div className="containerForm">
                <div className="tileForm">
                    <h2> NHẬP ĐỂ TƯ VẤN</h2>
                </div>
                <div className="inutForm">
                    <input className="iptForm" type="text"/>
                    <input className="iptForm" type="text" />
                    <input className="iptForm" type="text" />
                    <button className="btnForm"></button>
                </div>
            </div>
        </div>
    )
}
export default SendData
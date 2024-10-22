import { useState } from "react";

function UserInfo(props)
{
    function getRandomAge(min, max)
    {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    let randAge = getRandomAge(20, 50)
    const [info, setInfo] = useState(
        {
            name:props.name,
            age:randAge
        }
    )
    
    const [submit, setSubmit] = useState(false)
    function changeSubmit()
    {
        setSubmit(!submit)
    }
    return(
        <div>
            <h1>Информация о пользователе:</h1>
            <button onClick={changeSubmit}>{submit ? "Скрыть" : "Показать"}</button>
            {submit ? (
                <div>
                    <div className="user-info__container">
                        <p className="userName">
                            {info.name}
                        </p>
                        <p className="userAge">
                            {info.age}
                        </p>
                    </div>
                    <button onClick={() => {setInfo({name:info.name, age:getRandomAge(20, 50)})}}>Случайный возраст</button>
                </div>
            ) : <></>}
        </div>
    )
}
export default UserInfo
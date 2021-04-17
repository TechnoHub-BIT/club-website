import React from "react";

const CreateTest = () => {
    return(
        <React.Fragment>
            <div className="createTestCont">
                <form>
                    <input type="text" name="name" placeholder="Test Name" /><br /><br />
                    <input type="number" name="duration" placeholder="Test Duration(In mins)" /><br /><br />
                    <input type="date" name="date" placeholder="Test Date" /><br /><br />
                    <input type="time" name="stime" placeholder="Starting Time" /><br /><br />
                    <input type="time" name="etime" placeholder="Ending TIme" /><br /><br />
                </form>
            </div>
        </React.Fragment>
    );
};

export default CreateTest;

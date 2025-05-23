let participants = 1;

function participantTemplate(count) {
    
    let html = `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`

        addBtn.insertAdjacentHTML('beforebegin', html);  
    
}

let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function(){
    participants++;
    console.log(participants);
    participantTemplate(participants);
})

function submitForm(event) {
    event.preventDefault();
    let feeElements = document.querySelectorAll("[id^=fee]");
    let total = [...feeElements].map(input => parseFloat(input.value) || 0)
                                .reduce((sum, value) => sum + value, 0);

    
    let name = document.querySelector('#adult_name').value;
    alert("Thank you " + name + " your total fees are: $" + total);
}

let submit = document.querySelector('#submitButton');
submit.addEventListener('click', submitForm);
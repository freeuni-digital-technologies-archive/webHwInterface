// ამ ფაილში იქნება სხვადასხვა ინსტრუქციების 
// ჩვეულებრივ დამალული იქნება, პირველ გვერდზე მოეხსნება
// დამალვა და დანარჩენებზე ღილაკს თუ დააჭერენ გამოჩნდება

MESSAGES = {}
MESSAGES['პირობები'] = `
    თქვენ შეგიძლიათ ცვლილებების შეტანა მხოლოდ მითითებული ფაილების
    მითითებულ ნაწილებში. 
    ამ დავალებაზე ეს ფაილია "index.html".
თუ რომელიმე სხვა ფაილს/ნაწილს შეცვლით, დიდი შანსია, რომ ტესტები არასწორად გაეშვას.
`

MESSAGES['სამუშაო-გარემო'] = `
    ვების დავალებების სამუშაო გარემოსთვის აუცილებელია 
    <h3>code editor</h3>
    visual studio code <a href="https://code.visualstudio.com/" target="_blank">გადმოწერა</a>

    <h3>web browser</h3>
    იმისთვის, რომ გაუგებრობები თავიდან ავიცილოთ, დავალების კეთების დროს
    html ფაილები გახსენი ხოლმე მხოლოდ <strong>chrome</strong> ან <strong>firefox</strong>
    ბრაუზერით. თუ ეს არ არის შენი default ბრაუზერი (ავტომატურად მისით არ იხსნება html ფაილი), 
    მაშინ index.html-ის გახსნისას დააკლიკე მარჯვენა ღილაკს და მონიშნე open with > chrome (ან firefox)
`

MESSAGES['ედიტორის-გამოყენება'] = `
    გახსენი visual studio code. დააჭირე cmd/ctrl+o ს ან Menu>File>Open და მონიშნე დავალების folder
    მარცხნივ sidebar-ში გამოჩნდება ფაილები, რომლებიც შეგიძლია 
    იმისთვის, რომ შეცვლილი კოდის შედეგი ნახო, 1. შეინახე ფაილი და 2. გადატვირთე გვერდი ბრაუზერში
`

MESSAGES['inspect-element-გამოყენება'] = `
    inspect element არის ბრაუზერის ფუნქცია, ნახო საიტის html და css კოდი. ამისთვის, საიტის ცარიელ ადგილას
    (ისე რომ ლინკი ან სურათი არ იყოს კურსორის ქვეშ) გააკეთე right click და დააჭირე inspect-ს. აქ შეგიძლია
    სხვადასხვა ელემენტები და მათი სტილები ნახო. თუ კონკრეტული სიტყვის ძებნა გინდა (მაგალითად, real-password),
    დააკლიკე კოდის სივრცეში, შემდეგ დააჭირე ctrl+f/cmd+f-ს და ჩაწერე რასაც ეძებ.
    სხვათა შორის, ctrl+f/cmd+f ძებნის უნივერსალური shortcut-ია და თითქმის ყველა აპლიკაციაში შეგიძლია გამოყენება.
       
`

function hideMessage() {
    document.getElementById('instructions').innerHTML = ''
}

function showMessage(args) {
   const c =  Array.from([...arguments]).map(msg =>`
   <div class="help-message">
        <h3>${msg.replaceAll('-', ' ')}</h3>
       ${MESSAGES[msg]}
   </div>
`)

   document.getElementById('instructions').innerHTML = c.join('\n') + `<div><button onclick="hideMessage()">დახურვა</button></div>`
//    document.getElementById('instructions-text').innerText = msg
}
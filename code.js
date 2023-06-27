let raw_text;
let text_array;
let random_conan = document.getElementById('random_conan_output');
let chapters_output = document.getElementById('chapters_output');
let image_div = document.getElementById('image_div');
let reading_buttons = document.getElementById('reading_buttons');
let reading_text = document.getElementById('reading_text');

async function get_text(url) {
    const response = await fetch(url);
    raw_text = await response.text();
    text_array = raw_text.split('\n');
    raw_text = '';
    get_random_conan();
}

get_text('https://rioran.github.io/boryonan/text.txt');

function get_random_conan() {
    const choice_id_id = Math.floor(Math.random() * conan_ids.length);
    const choice_id = conan_ids[choice_id_id];
    const choice_text = text_array[choice_id];
    random_conan.innerHTML = decorate_borya(choice_text);
    random_conan.style.visibility = 'visible';
    chapters_output.style.visibility = 'hidden';
    chapters_output.innerHTML = '';
}

function decorate_borya(text) {
    let new_text;
    const text_array = text.split(' ');
    for (let i = 0; i < text_array.length; i++) {
        if (text_array[i].includes('Борёнан')) {
            text_array[i] = '<span style="color: #FF0000"><b>' + text_array[i] + '</b></span>';
        }
    }
    new_text = text_array.join(' ');
    return new_text;
}

function get_chapters() {
    random_conan.style.visibility = 'hidden';
    random_conan.innerHTML = '';
    chapters_output.style.visibility = 'visible';
    let chapters_html = '';
    for (let i = 0; i < chapter_names.length; i++) {
        chapters_html += '<button class="btn btn-primary m-1" onclick="get_reading(' + chapter_ids[i] + ')">' + i + ') ' + chapter_names[i] + '</div>';
    }
    chapters_output.innerHTML = chapters_html;
}

function get_reading(id) {
    random_conan.style.visibility = 'hidden';
    random_conan.innerHTML = '';
    chapters_output.style.visibility = 'hidden';
    chapters_output.innerHTML = '';
    image_div.style.visibility = 'hidden';
    image_div.innerHTML = '';
    let text_html = '';
    let paragraph = '';
    for (i = id; i < Math.min(text_array.length, id + 7); i++) {
        paragraph = '<p>' + decorate_borya(text_array[i]) + '</p>'
        if (chapter_ids.includes(i)) {
            paragraph = '<h1>' + decorate_borya(text_array[i]) + '</h1>'
        }
        text_html += paragraph;
    }
    reading_text.innerHTML = text_html;
    update_reading_buttons(id);
}

function update_reading_buttons(id) {
    let text_html = '<button type="button" class="col btn btn-success m-1" onclick="get_reading(' + (id-7)
    text_html += ');">◄◄◄</button><button type="button" class="col btn btn-success m-1" onclick="get_reading(' + (id+7) + ');">►►►</button>';
    reading_buttons.innerHTML = text_html;
}

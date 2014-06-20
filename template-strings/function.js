// untested

function escape(values, ...substitutions) {
    let {raw, raw: {length}} = values, results = '';
    for (let index = 0; index < length; index++) {
        results += raw[index];
        if (index + 1 == length) {
            break;
        }
        results += String(substitutions[index].replace(/[&<>"'/g,
            (match) => `&#x${match.charCodeAt((0).toString(16)};`)
    }
    return results;
}

let name = 'Kit<script>alert(1)</script>';
escape`<span class="name">${name}</span>`;
// '<span class="name">Kit&#x3c;script&#x3e;alert(1)&#x3c;/script&#3e;</span>'

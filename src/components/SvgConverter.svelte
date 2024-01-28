<script lang="ts">
    const invalidSvgString = "That's not a valid SVG";
    let inputText: string = "";
    let outputText: string = inputText;

    function convertToSVG(text: string) {
        // Check for validity
        const validSvg =
            text.replaceAll(/\n/g, "").match(/^<svg.*<\/svg>$/) !== null;
        if (text === "") {
            return "";
        } else if (!validSvg) {
            return invalidSvgString;
        }

        // Convert to a safe version
        const safeText = text
            .replaceAll(/\#/g, "%23") // Change question marks for
            .replaceAll(/\?/g, "%3F") // Change question marks for
            .replaceAll(/\s\s+/g, " ") // Change spaces to singular versions
            .replaceAll(/[\t\n\r]/g, "") // Remove other whitespace
            .replaceAll(/\'/g, '"') // Replace single quotes with double quotes
            .replaceAll(/> </g, "><"); // Remove space between tags
        return `url('data:image/svg+xml,${safeText}')`;
    }

    $: {
        outputText = convertToSVG(inputText);
    }
</script>

<div class="inputs">
    <textarea
        bind:value={inputText}
        placeholder="Write your SVG here"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        rows="20"
    />
    <textarea
        class:invalid={outputText === invalidSvgString}
        bind:value={outputText}
        placeholder="URL will appear here"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        readonly={true}
    />
</div>

<style>
    .inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    textarea {
        resize: none;
    }

    .invalid {
        color: red;
    }
</style>

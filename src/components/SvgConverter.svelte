<script lang="ts">
    const invalidSvgString = "That's not a valid SVG";
    let conversionType: number = 0;

    let inputText: string = "";
    let outputText: string = inputText;

    function convertToSVG(text: string, type: number) {
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

        // Conversion types
        let formattedOutput = `url('data:image/svg+xml,${safeText}')`;
        if (type === 1) {
            formattedOutput = `background-image: ${formattedOutput}`;
        }
        return formattedOutput;
    }

    $: {
        outputText = convertToSVG(inputText, conversionType);
        buttonDisabled = outputText === invalidSvgString || outputText === "";
    }

    // Copy functionality

    let copiedText: boolean = false;
    let buttonDisabled: boolean = true;
    let previousTimer: number | undefined = undefined;

    function copyOutput() {
        // Check if the button is disabled
        if (buttonDisabled) {
            return;
        }

        // Copy via the weird API and show new text
        navigator.clipboard.writeText(outputText);
        copiedText = true;

        if (previousTimer) {
            clearTimeout(previousTimer);
        }
        previousTimer = setTimeout(() => {
            copiedText = false;
        }, 1000);
    }
</script>

<div class="two-grid">
    <div class="input-text">
        <textarea
            bind:value={inputText}
            placeholder="Write your SVG here"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            rows="20"
        />
    </div>

    <div class="output-text">
        <textarea
            class:invalid={outputText === invalidSvgString}
            bind:value={outputText}
            placeholder="URL will appear here"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            readonly={true}
            rows="20"
        />
        <button
            on:click={copyOutput}
            class="copy-button"
            disabled={buttonDisabled}
            >{copiedText ? "Text copied!" : "Copy"}</button
        >
    </div>
</div>

<fieldset class="extra-options">
    <legend>Mode:</legend>
    <label>
        <input type="radio" bind:group={conversionType} value={0} checked />
        URL string
    </label>
    <label>
        <input type="radio" bind:group={conversionType} value={1} />
        background-image
    </label>
</fieldset>

<style>
    .two-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }

    .invalid {
        color: red;
    }

    .output-text {
        display: grid;
        grid-template-columns: 1fr;
    }

    .output-text > * {
        grid-column-start: 1;
        grid-row-start: 1;
    }

    .copy-button {
        height: max-content;
        width: max-content;
        align-self: end;
        justify-self: end;
        z-index: 1;
    }
</style>

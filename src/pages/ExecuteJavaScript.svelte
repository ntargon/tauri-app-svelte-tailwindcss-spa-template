<script lang='ts'>
    let code = '';

    const execute = () => {
        eval(code);
    };
</script>

<h1>Execute JavaScript</h1>

<textarea cols="30" rows="10" bind:value={code}></textarea>
<button on:click={execute}>execute</button>
<script lang="ts">
    import { getClient } from "@tauri-apps/api/http";
    import { message } from '@tauri-apps/api/dialog';

    type ZipCloudResult = {
        zipcode: string,
        prefcode: string,
        address1: string,
        address2: string,
        address3: string,
        kana1: string,
        kana2: string,
        kana3: string,
    };

    type ZipCloudData = {
        message: string,
        results: Array<ZipCloudResult>,
        status: number,
    };


    let results: Array<ZipCloudResult> = [];
    let zipcode: string = "";

    async function searchZipcode() {
        const client = await getClient();
        const response = await client.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode);
        const data = response.data as ZipCloudData;

        if (data.status === 200 && data.results) {
            results = data.results;
        } else {
            await message(data.message ? data.message : "Not Found", {title: 'Error', type: 'error'});
            results = []
        }
    };

</script>

<div>
    <h1>Zipcode Search</h1>

    <h2>検索する</h2>
    <div>
        <form on:submit|preventDefault={searchZipcode}>
            <input type="text" bind:value={zipcode} placeholder="zipcode">
            <button type="submit">郵便番号を検索</button>
        </form>

        {#each results as result}
            <div>
                {result.address1} {result.address2} {result.address3}
            </div>
        {/each}
    </div>

    <h2>使い方</h2>
    <p>
        こうやります!
    </p>
</div>
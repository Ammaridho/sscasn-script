async function itter(offset) {
    try {
        const response = await fetch("https://api-sscasn.bkn.go.id/2024/portal/spf?kode_ref_pend=5101087&offset=" + offset + "&formasi=UMUM");
        const result = await response.json();
        return result.data;
    } catch (error) {
        this.setState({
            isLoaded: true,
            error
        });
        throw error;
    }
}

async function fetchData(dari, sampai) {
    try {
        let hasil = [];
        for (let index = dari; index <= sampai; index++) {
            let itterResult = await itter(index * 10);
            hasil = [...hasil, ...(itterResult.data)];
        }
        console.log(hasil);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
import {replaceDashesWithSpaces, replaceSpacesWithDashes} from "../Helpers/String/helpers";


const escapeXml=(unsafe)=> {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

const generateSiteMap=(urls)=> {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map(url => `
        <url>
            <loc>${escapeXml(url.loc)}</loc>
            <priority>${url.priority}</priority>
        </url>`).join('')}
    </urlset>`;
}

function SiteMap({data}) {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({res}) {
    const staticUrls = [
        {loc: 'https://www.zcoderz.com/', priority: 1.0},
        {loc: 'https://www.zcoderz.com/contact-us/', priority: 0.8},
        {loc: 'https://www.zcoderz.com/about-us/', priority: 0.8},
        {loc: 'https://www.zcoderz.com/careers/', priority: 0.7},
        {loc: 'https://www.zcoderz.com/blogs/', priority: 0.8},
        {loc: 'https://www.zcoderz.com/our-process/agile-development/', priority: 0.8},
        {loc: 'https://www.zcoderz.com/our-process/ui-ux-process/', priority: 0.8},
    ];




    try {
        const blogsParams = new URLSearchParams({
            fields: "title",
        });
        const blogsResult = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}blogs/website/articles?${blogsParams.toString()}`);

        const blogsData = await blogsResult.json()

        const blogsTitles = blogsData?.data?.items?.map((item) => replaceDashesWithSpaces(String(item?.title)))
        const blogsUrls = blogsTitles?.map((blog) => {
            return {loc: `https://www.zcoderz.com/blogs/${blog}/`, priority: 0.8}
        })

        const careerParams = new URLSearchParams({
            fields: "position,id",
        });
        const careersResult = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}career/website/position-details?${careerParams.toString()}`);

        const careersData = await careersResult.json()
        const careersUrls = careersData?.data?.items?.map((career) => {
            return {loc: `https://www.zcoderz.com/careers/${replaceSpacesWithDashes(career?.position?.title)}/${career?.id}/overview/`, priority: 0.8}
        })

        const urls = [...staticUrls, ...blogsUrls,...careersUrls
        ];

        const sitemap = generateSiteMap(urls);

        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemap);
        res.end();

        return {
            props: {
            },
        }

    } catch (error) {

        return {
            redirect: {
                permanent: false,
                destination: "/error"
            }
        };
    }
}

export default SiteMap;

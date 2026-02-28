export async function load({ fetch }) {
    try {
        const res = await fetch('https://api.github.com/repos/elias-knodel/elias-knodel/readme', {
            headers: { Accept: 'application/vnd.github.html+json' }
        });
        if (!res.ok) return { readmeHtml: null };
        const html = await res.text();

        // replace all anchor tags if the href contains camo.githubusercontent.com
        const githubAnchor =
            /<a\b[^>]*\bhref=(["'])https?:\/\/(?:camo\.)?githubusercontent\.com\/[^"']*\1[^>]*>([\s\S]*?)<\/a>/gi;
        let replacedHtml = html.replace(
            githubAnchor,
            '<span class="github-link-removed">$2</span>'
        );

        // replace 'align="center"' with 'style="display: flex;justify-content: center;gap: 0.5em;"'
        replacedHtml = replacedHtml.replace(
            /align="center"/g,
            'class="flex gap-2 flex-wrap justify-center"'
        );
        // replacedHtml = html.replace(/src="https:\/\/camo\.githubusercontent\.com\/[^"]+"/g, '')
        const readmeHtml = replacedHtml;

        return { readmeHtml };
    } catch {
        return { readmeHtml: null };
    }
}

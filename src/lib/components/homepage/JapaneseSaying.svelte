<script lang="ts">
    import * as m from '$lib/paraglide/messages';

    const sayings = [
        { kanji: '侘び寂び', romaji: 'Wabi-sabi', definition: m.saying_wabisabi },
        { kanji: '物の哀れ', romaji: 'Mono no aware', definition: m.saying_mono_no_aware },
        { kanji: '木漏れ日', romaji: 'Komorebi', definition: m.saying_komorebi },
        { kanji: '一期一会', romaji: 'Ichi-go ichi-e', definition: m.saying_ichigo_ichie },
        { kanji: '間', romaji: 'Ma', definition: m.saying_ma },
        { kanji: '森林浴', romaji: 'Shinrin-yoku', definition: m.saying_shinrin_yoku },
        { kanji: '七転び八起き', romaji: 'Nana korobi ya oki', definition: m.saying_nana_korobi },
        { kanji: '余白', romaji: 'Yohaku', definition: m.saying_yohaku },
        { kanji: '花鳥風月', romaji: 'Kachō fūgetsu', definition: m.saying_kacho_fugetsu },
        { kanji: '縁', romaji: 'En', definition: m.saying_en },
        { kanji: '積ん読', romaji: 'Tsundoku', definition: m.saying_tsundoku },
        { kanji: '諸行無常', romaji: 'Shogyō mujō', definition: m.saying_shogyo_mujo }
    ];

    const randomIndex = Math.floor(Math.random() * sayings.length);
    const saying = sayings[randomIndex];
</script>

<div class="flex h-full flex-col justify-between">
    <p class="font-mono">06: 日本語</p>

    <div>
        <p class="text-4xl font-light tracking-widest">{saying.kanji}</p>
        <p class="mt-1 font-mono text-sm text-white/50">{saying.romaji}</p>
    </div>

    <p class="text-sm leading-relaxed text-white/70">{saying.definition()}</p>
</div>

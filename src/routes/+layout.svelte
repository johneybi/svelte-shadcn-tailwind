<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/layout/header.svelte';
    import Sidebar from '$lib/components/layout/sidebar.svelte';
    import Panel from '$lib/components/layout/panel.svelte';
    // 필요 없으면 아래 세 개는 잠시 주석 처리
    import Footer from '$lib/components/layout/footer.svelte';
    import LeftBanner from '$lib/components/layout/left-banner.svelte';
    import RightBanner from '$lib/components/layout/right-banner.svelte';

    const { children } = $props(); // Svelte 5
    let snbPosition: 'left' | 'right' = 'left'; // 기본값

    // style은 문자열 하나로 계산해 넣기
    const bg = () =>
        `linear-gradient(to right, ${
            snbPosition === 'left'
                ? 'white 50%, var(--dusty-100) 50%'
                : 'var(--dusty-100) 50%, white 50%'
        })`;
</script>

<svelte:head>
    <title>Quilt UI Kit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="flex min-h-screen flex-col items-center" style={`background: ${bg()};`}>
    <div class="container flex w-full flex-1 flex-col">
        <Header />

        <div class="mx-auto flex w-full flex-1 bg-transparent">
            <aside class="hidden w-64 border-r bg-white md:block">
                <Sidebar />
            </aside>

            <main class="flex-1 overflow-y-auto rounded-t-xl bg-dusty-100 p-4 md:p-6">
                {@render children()}
            </main>
            {#if snbPosition === 'left'}
                <aside class="hidden w-80 border-l bg-dusty-50 my-6 rounded-md md:block">
                    <!-- 여기에 오른쪽 사이드바 내용 추가 -->
                    <Panel />
                </aside>
            {/if}
        </div>
    </div>
    <!-- 왼쪽 배너 - 절대 위치, 1200px 밖에 배치 -->
    <aside class="fixed left-4 top-1/2 z-30 hidden w-[160px] -translate-y-1/2 xl:block">
        <LeftBanner />
    </aside>
    <!-- 오른쪽 배너 - 절대 위치, 1200px 밖에 배치 -->
    <aside class="fixed right-4 top-1/2 z-30 hidden w-[160px] -translate-y-1/2 xl:block">
        <RightBanner />
    </aside>

    <!-- 푸터 -->
    <Footer />
</div>

# 사심서가 · SASEO

> 지극히 사적인 취향으로 이야기를 분류합니다.

사심서가(私心書架)는 개인이 읽은 웹소설과 웹툰을 자신의 취향과 기준으로 분류하고 기록하는 콘텐츠 아카이브입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Supabase (PostgreSQL, Auth, Storage)
- Vercel

## 로컬 실행

1. `.env.local.example`을 복사해 `.env.local`을 만듭니다.
2. Supabase 프로젝트 URL과 publishable key를 입력합니다.
3. 개발 서버를 실행합니다.

```bash
npm run dev
```

환경변수 없이도 lint와 production build는 검증할 수 있지만, 실제 요청을 처리하려면 Supabase 환경변수가 필요합니다.

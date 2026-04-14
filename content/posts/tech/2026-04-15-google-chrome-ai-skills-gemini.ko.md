---
title: "구글 Chrome에 AI Skills 탑재 — Gemini 프롬프트를 워크플로로 저장하다"
date: 2026-04-15T05:35:45+09:00
layout: "post"
description: "구글이 Chrome 브라우저에 Gemini 프롬프트를 저장·재사용하는 AI Skills 기능을 공개했다. Google I/O 2026을 앞두고 Chrome을 AI 작업 허브로 전환하는 전략의 일환이며, 워크플로 자동화 시장에 구글의 직접 진입을 의미한다."
categories:
  - 기술
tags:
  - "구글"
  - "Chrome"
  - "Gemini"
  - "AI Skills"
  - "생산성"
---

구글이 Chrome 브라우저에 AI 기반 기능 **Skills** 를 탑재했다. Gemini 에 입력했던 프롬프트를 워크플로로 저장·재사용할 수 있는 이 기능은 <mark>2026년 4월 14일</mark> 정식 공개됐으며, 크롬 사용자라면 누구나 즉시 쓸 수 있다.

## 핵심 요약

- **Chrome Skills** 는 Gemini 프롬프트를 저장하고 원클릭으로 재실행하는 워크플로 자동화 기능이다
- 맥OS **Spotlight** 방식과 유사하게, 브라우저 주소창에서 바로 AI 작업을 호출할 수 있다
- 구글은 <mark>Google I/O 2026</mark> 을 앞두고 Chrome-AI 통합을 공격적으로 확장하고 있다

## Skills 가 하는 일

기존에는 Gemini 에 매번 같은 프롬프트를 직접 입력해야 했다. 예컨대 "이 웹페이지를 요약해서 한국어로 번역해줘"라는 작업을 매일 반복한다면, 매번 타이핑해야 했다. **Skills** 는 이 반복 작업을 하나의 버튼으로 저장한다.

사용법은 단순하다. Gemini 에서 원하는 프롬프트를 실행한 뒤 "Save as Skill"을 선택하면, 이후 Chrome 어디서든 해당 스킬을 불러올 수 있다. <span class="hl-blue">브라우저가 AI 작업 실행 환경으로 진화</span> 하는 구체적 사례다.

Ars Technica 의 테스트에 따르면 Skills 는 현재 웹페이지 맥락을 자동으로 인식해 프롬프트에 반영한다. 즉, "이 기사의 핵심 논점 3개 추출" 스킬을 저장해두면, 어떤 뉴스 사이트를 방문하든 그 기사에 맞게 자동 적용된다.


*Source: [Google introduces "Skills" in Chrome to make Gemini prompts instantly reusable](https://arstechnica.com/google/2026/04/google-introduces-skills-in-chrome-to-make-gemini-prompts-instantly-reusable/)*

## 왜 지금인가 — Google I/O 2026 전초전

구글이 <mark>Google I/O 2026</mark> 직전에 Skills 를 출시한 타이밍은 의도적이다. 매년 5월에 열리는 I/O 는 구글의 가장 큰 개발자 이벤트로, 올해는 Gemini 의 전면적인 제품 통합이 핵심 발표가 될 것으로 예상된다. Skills 는 그 예고편이다.

경쟁 구도를 보면 더 분명해진다. Microsoft 는 **Copilot** 을 Edge 와 Windows 에 깊숙이 통합했고, Apple 은 **Apple Intelligence** 를 Safari 와 시스템 전반에 내장했다. 구글 입장에서 Chrome 은 전 세계 브라우저 점유율 <mark>65%</mark> 이상을 차지하는 핵심 플랫폼이다. 이 플랫폼에 AI 워크플로를 심는 것은 구글의 AI 전략에서 가장 직접적인 수익화 경로다.

파급 경로를 분석하면 다음과 같다.

- **1차 효과**: Chrome 사용자의 Gemini 이용 빈도 증가 → 구글 AI 구독 수요 상승
- **2차 효과**: 기업 환경에서 Chrome Enterprise 채택 강화 → <span class="hl-blue">생산성 소프트웨어 시장 재편</span>
- **3차 효과**: 브라우저가 AI 오케스트레이터로 자리잡으면서 → Notion, Zapier 등 워크플로 자동화 도구와 직접 경쟁

## 기술 구조와 한계

Skills 는 현재 클라이언트 사이드에서 Gemini API 를 호출하는 방식으로 작동한다. 프롬프트 자체는 구글 계정에 저장되며, 로그인한 모든 기기에서 동기화된다. <span class="hl-red">단, 민감한 업무 프롬프트가 구글 서버에 저장된다는 점에서 기업 보안 정책과의 충돌 가능성</span> 이 있다.

오픈소스 측면에서는 아직 제한적이다. Skills 는 Chrome 전용으로, Firefox 나 Safari 에서는 사용 불가다. Gemini 구독 없이 무료로 쓸 수 있는 기본 기능과, 유료 **Gemini Advanced** 구독자를 위한 고급 기능이 구분될 것으로 예상된다.

## 투자 임팩트

구글(알파벳, **GOOG/GOOGL**) 입장에서 Skills 는 광고 의존도를 낮추고 <span class="hl-blue">AI 구독 매출을 늘리는 직접적 도구</span> 다. 분석가들은 Gemini Advanced 구독 성장이 2026년 알파벳의 실적 서프라이즈 요소 중 하나가 될 것으로 본다.

반면 **Zapier**, **Make(구 Integromat)**, **Notion AI** 등 독립 워크플로 자동화 스타트업들에게는 <span class="hl-red">구글의 직접 진입이라는 경쟁 압박</span> 이 현실화됐다. 크롬 생태계 안에서 해결되는 자동화 니즈가 늘어날수록, 이들의 시장 확장성은 좁아진다.

Google I/O 2026 에서 구글이 Skills 를 어느 수준까지 확장할지, 그리고 기업용 Chrome Enterprise 에 어떤 형태로 통합할지가 다음 관전 포인트다.

## 참고 기사

1. [Google introduces "Skills" in Chrome to make Gemini prompts instantly reusable](https://arstechnica.com/google/2026/04/google-introduces-skills-in-chrome-to-make-gemini-prompts-instantly-reusable/) — Ars Technica
2. [Google adds AI Skills to Chrome to help you save favorite workflows](https://techcrunch.com/2026/04/14/google-adds-ai-skills-to-chrome-to-help-you-save-favorite-workflows/) — TechCrunch
3. [What to expect from Google I/O 2026](https://www.engadget.com/ai/what-to-expect-from-google-io-2026-200252914.html) — Engadget

---
title: "구글 Gemma 4·마이크로소프트 MAI 3종 동시 출격 — 오픈소스 AI 패권 경쟁 본격화"
date: 2026-04-03T05:54:16+09:00
layout: "post"
description: "구글이 Gemini 3 기술 기반의 Gemma 4를 Apache 2.0 라이선스로 공개하며 오픈소스 생태계 확장에 나섰다. 같은 날 마이크로소프트 MAI 그룹도 음성·오디오·이미지 생성 기초 모델 3종을 출시하며 OpenAI 의존 탈피를 공식화했다. 오픈소스 AI 시장이 빅테크 3파전으로 재편되고 있다."
categories:
  - 기술
tags:
  - "AI"
  - "구글"
  - "마이크로소프트"
  - "오픈소스"
  - "Gemma"
  - "LLM"
thumbnail: "https://cdn.arstechnica.net/wp-content/uploads/2026/04/gemma-4_keyart_header-dark_16_9-1152x648.png"
---

구글과 마이크로소프트가 <mark>2026년 4월 2일</mark> 하루 사이 오픈소스 AI 기초 모델을 잇달아 공개했다. 구글은 **Gemma 4** 를 1년 만에 메이저 업데이트하며 <span class="hl-blue">Apache 2.0 라이선스</span> 로 전환했고, 마이크로소프트 MAI 그룹은 출범 6개월 만에 음성·오디오·이미지 생성 모델 3종을 동시 선보였다.

## 핵심 포인트

- 구글 Gemma 4, Gemini 3 기술을 오픈소스로 이전 — Apache 2.0 채택으로 상업적 활용 제한 사실상 철폐
- 마이크로소프트 MAI 그룹, 결성 <mark>6개월</mark> 만에 음성·오디오·이미지 생성 모델 3종 동시 출시
- 오픈소스 AI 시장은 구글·메타·마이크로소프트의 3파전으로 재편 중

## 구글 Gemma 4: Gemini 3 기술의 오픈소스 이전

![이미지 1](https://cdn.arstechnica.net/wp-content/uploads/2026/04/gemma-4_keyart_header-dark_16_9-1152x648.png)
*▲ Source: [Google announces Gemma 4 open AI models, switches to Apache 2.0 license](https://arstechnica.com/ai/2026/04/google-announces-gemma-4-open-ai-models-switches-to-apache-2-0-license/)*

Gemma 4는 지난해 말 공개된 **Gemini 3 Pro** 의 연구 성과를 오픈소스 커뮤니티에 개방한 모델이다. 이전 Gemma 시리즈는 구글의 자체 제한 라이선스를 사용했으나, 이번에는 <span class="hl-blue">Apache 2.0</span> 으로 전환해 기업 상업 배포, 파인튜닝, 재배포 모두에 사실상 제약이 사라졌다.

이 라이선스 전환은 메타 LLaMA 시리즈가 빠른 생태계 확장을 이룬 방식과 동일한 전략이다. 구글은 Gemma 4 사용자를 자사 클라우드 인프라(Vertex AI, Google Cloud)의 유입 경로로 활용하려는 의도가 분명하다.

> "Gemma 4는 단순한 오픈소스 공개가 아니다. 구글의 최신 프론티어 모델 기술이 처음으로 제한 없이 커뮤니티에 열렸다."

기술 구조 측면에서 Gemma 4는 Gemma 3 대비 멀티모달 처리 능력이 강화됐으며, Gemini 3 Pro와 동일한 아키텍처 원칙을 계승한다. 코딩·추론·멀티모달 영역에서 전작 대비 유의미한 성능 향상이 확인된다고 구글은 밝혔다. 구체적인 파라미터 수와 벤치마크 수치는 발표 시점에 공개되지 않았으나, 오픈소스 리더보드에서의 실제 성적이 채택률을 결정할 것이다.

**오픈소스 vs 클로즈드 구도**: OpenAI가 GPT 계열을 통해 클로즈드 생태계를 강화하는 반면, 구글과 메타는 오픈소스로 개발자 기반을 확보하는 전략을 취하고 있다. <span class="hl-red">라이선스 리스크</span> 도 무시할 수 없다 — Apache 2.0은 군사적 활용이나 악의적 사용에 대한 제한이 없어, AI 안전성 우려가 재부상할 수 있다.

## 마이크로소프트 MAI: 독자 모델 역량 공식화

마이크로소프트가 <mark>6개월</mark> 전 조용히 결성한 **MAI(Microsoft AI) 그룹** 이 첫 성과물을 공개했다. 출시된 3개 모델의 역할은 다음과 같다.

| 모델 유형 | 기능 |
|-----------|------|
| 음성 모델 | 음성 → 텍스트 변환 (Speech-to-Text) |
| 오디오 생성 모델 | 텍스트 기반 오디오 생성 |
| 이미지 생성 모델 | 텍스트 기반 이미지 생성 |

이 3종 세트는 마이크로소프트가 <mark>$130억</mark> 이상을 투자한 OpenAI에 대한 단일 의존에서 벗어나 <span class="hl-blue">독자 기초 모델 역량</span> 을 공식화했다는 신호다. MAI 모델들은 Azure AI 서비스와 통합되어 엔터프라이즈 고객에게 직접 공급된다.

마이크로소프트와 OpenAI의 관계는 최근 미묘하게 달라지고 있다. 파트너십은 유지되지만, 마이크로소프트는 특정 제품군에서 OpenAI 대신 자체 모델이나 경쟁사 모델(Mistral, DeepSeek)을 채택하는 방향으로 조용히 다각화해왔다. MAI의 기초 모델 공개는 그 흐름을 공식화한 것이다.

## 오픈소스 AI 경쟁: 왜 지금인가

2026년 1분기 들어 오픈소스 AI 경쟁이 치열해진 배경에는 세 가지 구조적 변화가 있다.

- **비용 압박**: 클로즈드 API 비용이 기업에 부담으로 작용하면서 자체 배포 가능한 오픈 모델 수요가 급증했다
- **규제 압박**: EU AI법 시행 이후 데이터 통제권에 민감한 유럽 기업들이 클라우드 종속을 피하기 위해 오픈소스를 선호한다
- **생태계 전쟁**: 개발자 생태계 선점이 곧 클라우드 수익으로 직결된다는 논리가 강화됐다

<span class="hl-blue">승자</span> 는 개발자 커뮤니티다 — 품질 높은 오픈 모델 공급이 늘면서 추론 비용은 지속적으로 하락할 것이다. <span class="hl-red">패자</span> 는 소규모 오픈소스 AI 스타트업이다 — 빅테크가 직접 오픈 모델을 공급하면 차별화 포지셔닝이 더욱 어려워진다.

## 전망

구글 Gemma 4가 실제 기업 채택률을 얼마나 높이느냐, 마이크로소프트 MAI 모델이 Azure 에코시스템에서 어떤 위치를 차지하느냐가 앞으로 <mark>6~12개월</mark> 의 핵심 변수다. 오픈소스 AI 시장은 이미 메타 LLaMA, Mistral, Qwen, DeepSeek가 경쟁하는 다극 구도다. 빅테크의 직접 참전으로 품질 상향 평준화 속도는 더욱 빨라질 것이다. 누가 먼저 '개발자가 가장 많이 쓰는 오픈 모델' 타이틀을 확보하느냐가 이 경쟁의 궁극적 승부처다.

## 참고 기사

1. [Google announces Gemma 4 open AI models, switches to Apache 2.0 license](https://arstechnica.com/ai/2026/04/google-announces-gemma-4-open-ai-models-switches-to-apache-2-0-license/) — Ars Technica
2. [Microsoft takes on AI rivals with three new foundational models](https://techcrunch.com/2026/04/02/microsoft-takes-on-ai-rivals-with-three-new-foundational-models/) — TechCrunch
3. [Google releases Gemma 4, a family of open models built off of Gemini 3](https://www.engadget.com/ai/google-releases-gemma-4-a-family-of-open-models-built-off-of-gemini-3-160000332.html) — Engadget

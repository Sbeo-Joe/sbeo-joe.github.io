---
title: "구글, 에이전틱 AI 시대 겨냥한 신형 TPU 2종 공개 — 엔비디아에 정면 도전"
date: 2026-04-23T05:44:18+09:00
layout: "post"
description: "구글이 Google Cloud Next에서 추론용과 학습용으로 분리한 신형 TPU 2종을 발표했다. 이전 세대보다 빠르고 저렴하며, 추론 칩에는 대규모 SRAM을 내장해 엔비디아의 기술 방향을 따랐다. 자체 TPU를 강화하면서도 엔비디아 GPU를 클라우드에서 계속 제공하는 이중 전략으로 AI 인프라 시장을 겨냥했다."
categories:
  - 기술
tags:
  - "구글"
  - "TPU"
  - "AI칩"
  - "엔비디아"
  - "클라우드"
thumbnail: "https://cdn.arstechnica.net/wp-content/uploads/2026/04/TPU-8t-board-1152x648.jpg"
---

구글이 <mark>2종의 신형 TPU(Tensor Processing Unit)</mark> 를 공개했다. 추론용과 학습용을 분리한 이 설계는 AI 에이전트 시대를 직접 겨냥한 전략적 포지셔닝이며, 엔비디아의 클라우드 AI 칩 독점에 본격 도전장을 내밀었다.

## 핵심 포인트

- Google Cloud Next에서 추론(Inference) 전용·학습(Training) 전용 TPU 2종 동시 발표
- 이전 세대 대비 빠르고 저렴하다고 구글이 밝혔으며, 추론용 칩에는 대규모 <mark>SRAM</mark> 내장
- 구글은 자체 TPU를 강화하면서도 엔비디아 GPU를 Google Cloud에서 계속 제공하는 이중 전략 유지

![이미지 1](https://cdn.arstechnica.net/wp-content/uploads/2026/04/TPU-8t-board-1152x648.jpg)
*▲ 구글 신형 TPU 보드 (Source: [Google unveils two new TPUs designed for the "agentic era"](https://arstechnica.com/ai/2026/04/google-unveils-two-new-tpus-designed-for-the-agentic-era/))*

## 두 개의 칩, 하나의 전략

구글의 새 TPU는 역할을 분리했다. 하나는 AI 모델을 <span class="hl-blue">학습(Training)</span> 시키는 칩, 다른 하나는 학습된 모델을 실제로 실행하는 <span class="hl-blue">추론(Inference)</span> 전용 칩이다. 이 분리 전략은 각 단계의 연산 특성이 근본적으로 다르다는 인식에서 나온다.

학습은 대규모 병렬 연산과 메모리 대역폭을 요구하는 반면, 추론은 레이턴시(응답 지연) 최소화와 에너지 효율이 핵심이다. 단일 칩으로 두 목적을 모두 최적화하는 것은 물리적 한계가 있다. 엔비디아도 <mark>H100</mark>(학습 최적화)과 <mark>L40S</mark>(추론 최적화) 라인업을 구분하며 같은 방향을 택했고, 구글도 이를 따른다.

특히 추론용 TPU에 대규모 SRAM을 내장한 점이 주목된다. SRAM은 DRAM보다 빠르지만 비싸다. 모델 실행 시 데이터를 빠르게 접근하려면 칩 내부에 더 많은 메모리가 필요하며, 이는 엔비디아의 기술 방향과 일치하는 선택이다.

## '에이전틱 시대'를 위한 설계

구글이 이 칩을 "에이전틱 시대(Agentic Era)"를 위한 설계라고 표현한 것은 의미심장하다. AI 에이전트는 단순 질의응답이 아니라 여러 단계의 추론을 연속으로 수행한다. 웹 검색, 코드 실행, 파일 조작을 자율적으로 반복하는 에이전트는 기존 챗봇보다 훨씬 많은 추론 연산을 요구한다.

<mark>Claude Code</mark>, <mark>OpenAI Operator</mark>, <mark>Gemini</mark> 등 에이전트 제품이 폭발적으로 증가하는 상황에서, 추론 최적화 칩의 중요성은 갈수록 커진다. 구글의 이번 발표는 단순한 칩 업그레이드가 아니라 AI 인프라 패러다임 전환에 대한 선제적 대응이다.

> "구글의 새 TPU는 더 빠르고 저렴해졌다. 하지만 엔비디아를 포용하면서 자체 칩도 강화하는 이중 전략은 결국 두 플레이어 모두에게 유리한 시장 확대를 의미한다."

## 엔비디아와의 관계 — 경쟁인가 공존인가

중요한 점은 구글이 자체 TPU를 강화하면서도 <span class="hl-blue">엔비디아 GPU를 Google Cloud에서 계속 제공</span> 한다고 밝혔다는 것이다. "탈엔비디아"가 아닌 "다변화" 전략이다.

기업 고객 입장에서는 선택지가 늘어나는 것이 유리하다. 구글 TPU는 Gemini 모델 실행에 최적화되어 있어 구글 생태계 내 워크로드에 강점을 가진다. 반면 서드파티 모델(Llama, Mistral 등)은 여전히 GPU가 더 호환성이 좋다. 결국 <span class="hl-red">단기적으로 엔비디아(NVDA)의 지위는 흔들리지 않는다</span>.

## 투자·산업 임팩트

| 기업 | 티커 | 영향 |
|------|------|------|
| 엔비디아 | NVDA | 단기 영향 제한적, 장기 경쟁 점진적 심화 |
| 구글(알파벳) | GOOGL | TPU 경쟁력 강화 → 클라우드 마진 개선 기대 |
| AMD | AMD | 구글 TPU 성장이 GPU 점유율 확대에 간접 위협 |
| TSMC | TSM | AI 칩 수요 전반 수혜 — 위탁생산 물량 증가 |

연결고리 분석: AI 인프라 투자 확대 → 데이터센터 전력 수요 급증 → <span class="hl-blue">에너지·전력 인프라 섹터 수혜</span>. 구글의 AI 칩 투자 확대는 Vistra(VST), Constellation Energy(CEG) 등 전력 기업에도 긍정적 신호다.

오픈소스 AI 모델 확산 → API 가격 하락 → SaaS 마진 압박이라는 역방향 연결고리도 존재한다. 구글이 자체 칩으로 추론 비용을 낮출수록 AI 서비스 가격 경쟁이 심화될 수 있다.

## 참고 기사

1. [Google unveils two new TPUs designed for the "agentic era"](https://arstechnica.com/ai/2026/04/google-unveils-two-new-tpus-designed-for-the-agentic-era/) — Ars Technica
2. [Google Cloud launches two new AI chips to compete with Nvidia](https://techcrunch.com/2026/04/22/google-cloud-next-new-tpu-ai-chips-compete-with-nvidia/) — TechCrunch
3. [Google unveils chips for AI training and inference in latest shot at Nvidia](https://www.cnbc.com/2026/04/22/google-launches-training-and-inference-tpus-in-latest-shot-at-nvidia.html) — CNBC

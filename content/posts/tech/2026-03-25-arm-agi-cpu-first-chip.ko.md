---
title: "Arm, 35년 역사상 첫 자체 칩 출시 — Meta·OpenAI가 초도 고객으로 낙점"
date: 2026-03-25T05:38:30+09:00
layout: "post"
description: "Arm이 창립 35년 만에 처음으로 자체 CPU 'AGI CPU'를 출시했다. Meta가 초도 고객이며 OpenAI·Cerebras·Cloudflare가 뒤를 잇는다. IP 라이선서에서 직접 칩 제조사로의 전략 전환은 Apple·Amazon·Google 등 기존 라이선시와의 경쟁 구도를 형성하며 반도체 생태계 재편의 신호탄이 된다."
categories:
  - 기술
tags:
  - "Arm"
  - "반도체"
  - "AI칩"
  - "Meta"
  - "데이터센터"
  - "CPU"
---

Arm이 창립 <mark>35년</mark> 만에 처음으로 자체 CPU를 출시했다. 'AGI CPU'라 명명된 이 프로세서의 초도 고객은 Meta이며, OpenAI·Cerebras·Cloudflare가 후속 고객으로 대기 중이다.

## 핵심 포인트

- Arm이 기존 IP 라이선싱 전문 기업에서 직접 칩 제조사로 전략 전환을 선언했다
- Meta가 초도 고객으로 낙점됐으며 OpenAI·Cerebras·Cloudflare도 참여 확정
- Apple·Amazon·Google 등 기존 라이선시와 직접 경쟁하는 구도가 형성된다

## Arm의 35년 전략 대전환

반도체 업계에서 Arm의 위치는 독보적이었다. 직접 칩을 만들지 않고 CPU 설계도(IP)만 판매하며, 전 세계 스마트폰의 <mark>99%</mark> 이상에 Arm 아키텍처가 탑재돼 있다. Apple M4, Amazon Graviton4, Google Axion, Nvidia Grace — 모두 Arm의 라이선스를 사 직접 설계한 칩이다. Arm은 그 설계료를 받아왔다.

이제 그 공식이 깨진다. Arm이 직접 CPU를 만들어 데이터센터 시장에 진입하기로 결정했다. 이유는 구조적이다. AI 인프라 수요가 폭발하면서 <span class="hl-blue">데이터센터용 고성능 CPU 시장</span> 이 수백억 달러 규모로 빠르게 성장하고 있지만, Arm이 라이선싱 수수료로 가져가는 몫은 제한적이다. Google과 Amazon은 Arm 아키텍처 기반 커스텀 칩으로 인프라 비용을 20~30% 절감했다. 그 절감액의 대부분은 Arm이 아닌 두 회사 몫이었다.

Arm CEO 르네 하스는 이번 결정이 라이선싱 사업을 대체하는 것이 아니라 보완하는 전략이라고 밝혔지만, 업계는 이를 단순한 사업 확장으로 보지 않는다.

## AGI CPU: 무엇이 다른가

'AGI CPU'라는 명칭은 범용 인공지능(Artificial General Intelligence, AGI)에서 따온 마케팅 용어지만, 기술적 실체는 AI 추론(inference) 워크로드에 최적화된 데이터센터 전용 서버 프로세서다. Arm이 기존에 라이선시들에게 제공해온 Neoverse 코어 아키텍처를 기반으로 하되, Arm이 직접 시스템 설계와 패키징까지 책임지는 형태다.

Meta가 초도 고객으로 참여한 배경에는 <span class="hl-blue">Nvidia 의존도 탈피 전략</span> 이 있다. Meta는 자체 AI칩 MTIA를 개발 중이지만, 이를 구동할 호스트 CPU에서도 최적화된 솔루션이 필요했다. Arm AGI CPU는 Meta의 LLaMA 모델 추론 워크로드에 맞게 튜닝될 예정이다. OpenAI와 Cerebras는 자체 AI 가속칩과 함께 사용할 호스트 CPU로, Cloudflare는 엣지 컴퓨팅 인프라용으로 각각 채택하는 방향이다.

## 기존 라이선시와의 충돌 지형

| 기업 | Arm 기반 커스텀 CPU | 데이터센터 충돌 강도 |
|------|---------------------|----------------------|
| Apple | M4, A18 | 낮음 (소비자 기기) |
| Amazon | Graviton4 | **높음** (클라우드 서버) |
| Google | Axion | **높음** (클라우드 서버) |
| Nvidia | Grace | 중간 (GPU 서버 보조) |
| Qualcomm | Oryon | 낮음 (모바일·PC) |

<span class="hl-red">Amazon과 Google이 가장 예민하게 반응할 수밖에 없다.</span> 두 회사 모두 Arm 아키텍처 기반 자체 칩으로 연간 수십억 달러의 인프라 비용을 절감 중이며, 같은 시장에 Arm이 직접 진입하면 경쟁이 불가피하다. 더 민감한 문제는 라이선스 조건이다. Arm이 자사 직접 고객에게 최신 아키텍처를 먼저 제공하거나 유리한 조건을 부여할 경우, 기존 라이선시들은 불이익을 받을 수 있다.

이 우려가 현실화되면 <span class="hl-red">AMD·Intel의 x86 서버 칩 대안</span> 을 찾는 움직임이 가속화될 수 있다. 반도체 생태계 내 신뢰 구조가 흔들리면, 라이선싱 수입 자체도 위협받는 역설이 발생한다.

## 반도체 생태계 재편 시나리오

단기적으로는 <span class="hl-blue">AI 스타트업과 중소 클라우드 사업자</span> 에게 기회가 생긴다. 자체 칩 개발 역량 없이도 Arm이 직접 최적화한 데이터센터 CPU를 조달할 수 있기 때문이다. Cerebras와 Cloudflare의 참여는 이를 잘 보여준다.

> "IP 라이선서가 직접 칩을 만드는 것은 단순한 사업 확장이 아니다. 반도체 생태계의 분업 구조 자체가 바뀌는 것이다."

중장기적으로는 'IP 라이선서 vs. 칩 제조사'라는 반도체 업계의 전통적 경계가 무너지는 신호탄이 된다. TSMC가 파운드리(제조)에만 집중하고, 설계는 팹리스(fabless) 기업이 담당한다는 분업 구조가 업계 내 신뢰의 기반이었는데, Arm의 이번 결정은 이 암묵적 규칙을 깨는 것이다.

Arm이 라이선싱 수입을 유지하면서 직접 칩 판매까지 병행할 수 있을지 — 이 균형을 어떻게 유지하느냐가 향후 <mark>2~3년</mark> 반도체 산업 지형도를 결정하는 핵심 변수가 될 것이다.

## 참고 기사

1. [Arm releases first in-house chip, with Meta as debut customer](https://www.cnbc.com/2026/03/24/arm-releases-its-first-ever-in-house-chip-meta-is-its-debut-customer.html) — CNBC
2. [Arm Is Now Making Its Own Chips](https://www.wired.com/story/arm-is-now-making-its-own-chips/) — WIRED

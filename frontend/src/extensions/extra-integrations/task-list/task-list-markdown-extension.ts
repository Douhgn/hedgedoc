/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { MarkdownRendererExtension } from '../../../components/markdown-renderer/extensions/base/markdown-renderer-extension'
import type { ComponentReplacer } from '../../../components/markdown-renderer/replace-components/component-replacer'
import { TaskListReplacer } from './task-list-replacer'
import { tasksLists } from '@hedgedoc/markdown-it-plugins'
import type MarkdownIt from 'markdown-it'

/**
 * Adds support for interactive checkbox lists to the markdown rendering using the github checklist syntax.
 */
export class TaskListMarkdownExtension extends MarkdownRendererExtension {
  public configureMarkdownIt(markdownIt: MarkdownIt): void {
    tasksLists(markdownIt, {
      enabled: true,
      label: true,
      lineNumber: true
    })
  }

  public buildReplacers(): ComponentReplacer[] {
    return [new TaskListReplacer()]
  }
}

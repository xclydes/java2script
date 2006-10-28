/*******************************************************************************
 * Java2Script Pacemaker (http://j2s.sourceforge.net)
 *
 * Copyright (c) 2006 ognize.com and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     ognize.com - initial API and implementation
 *******************************************************************************/

package org.eclipse.swt.internal;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.graphics.Rectangle;
import org.eclipse.swt.widgets.Decorations;
import org.eclipse.swt.widgets.Monitor;

/**
 * @author josson smith
 *
 * 2006-4-24
 */
public class ResizeHandler {
	Decorations shell;
	int status;
	
	private ResizeHandler() {
	}

	public ResizeHandler(Decorations shell, int status) {
		this.shell = shell;
		this.status = status;
	}
	
	public void updateMinimized() {
		shell.setLocation(-1, shell.getMonitor().getClientArea().height - 26);
	}
	public void updateMaximized() {
		Monitor monitor = shell.getMonitor();
		Rectangle clientArea = monitor.getClientArea();
		Rectangle bounds = monitor.getBounds();
		int height = clientArea.height - 0;
		if (height > bounds.height - 10) {
			height = bounds.height - 10;
		}
		int width = clientArea.width;
		if (width > bounds.width) {
			width = bounds.width;
		}
		int titleHeight = ((shell.getStyle() & SWT.TITLE) != 0) ? 20 : 0;
		// FIXME: maximized size is not accurate
		shell.setBounds(shell.computeTrim(0, 0, width + 4, height - titleHeight + 6));
//		shell.setBounds(0 - 4, 0 - 4, width - 2, height + 4);
		//shell.setBounds(shell.computeTrim(0, 0, width + 2, height - 18));
	}
	public void updateCentered() {
		// Not used now
		Monitor monitor = shell.getMonitor();
		Point size = shell.getSize();
		int y = (monitor.getClientArea().height - size.y) / 2 - 20;
		if (y < 0) {
			y = 0;
		}
		shell.setLocation((monitor.getClientArea().width - size.x) / 2, y);
	}
	public int getStatus() {
		return status;
	}
}

  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-3b9k908rpk',
  shadow: true,
})
export class C3b9k908rpk {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
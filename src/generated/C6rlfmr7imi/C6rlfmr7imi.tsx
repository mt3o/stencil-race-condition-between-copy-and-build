
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-6rlfmr7imi',
  shadow: true,
})
export class C6rlfmr7imi {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  